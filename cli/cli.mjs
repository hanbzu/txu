#!/usr/bin/env node
import { argv } from "node:process";
import { getDeps, getTrain } from "./api.mjs";
import crypto from "crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import runSequentially from "../jslib/runSequentially.js";
import uniqBy from "../jslib/uniqBy.js";
import wait from "../jslib/wait.js";
import Enquirer from "enquirer";
import stations from "../data/stationsWithDbId.json" assert { type: "json" };
import FuzzySearch from "fuzzy-search";

const stationSearcher = new FuzzySearch(stations, ["name"], { sort: true });

const CACHE_PATH = "./private/cache.json";
let cachedData;
const cached =
  (fn) =>
  async (...args) => {
    // const argsHash = crypto
    //   .createHash("md5")
    //   .update(JSON.stringify(args))
    //   .digest("hex");
    const key = `${fn.name}-${args.map((d) => String(d)).join("-")}`;
    cachedData =
      cachedData || existsSync(CACHE_PATH)
        ? JSON.parse(await readFile(CACHE_PATH))
        : {};
    if (cachedData[key]) return cachedData[key];
    console.log(`⇣ ${key}...`);
    const result = await fn(...args);
    await wait(1500 + Math.random() * 7000);
    cachedData[key] = result;
    await writeFile(CACHE_PATH, JSON.stringify(cachedData, null, 2));
    return result;
  };

const [, , cmd, ...args] = argv;
Promise.resolve()
  .then(async () => {
    switch (cmd) {
      // deps "7100064" "23.03.31"
      case "deps": {
        //console.log(stationSearcher.search("Barce").slice(0, 4));
        //return;
        if (isNaN(args[0])) {
          // Ze zaila https://github.com/enquirer/enquirer/blob/master/examples/autocomplete/option-suggest-streaming.js
          const prompt = new Enquirer.AutoComplete({
            message: "Nondik?",
            //limit: 10,
            suggest(typed, choices) {
              this.toChoices(
                stationSearcher
                  .search(typed)
                  .slice(0, 9)
                  .map((d) => d.name)
              )
                .then((choices) => Promise.all(choices))
                .then(async (toAdd) => {
                  toAdd.forEach((d) => {
                    this.choices.push(d);
                  });
                  await this.render();
                });
            },
            choices: [],
          });

          const answer = await prompt.run();
          console.log("Answer:", answer);
        }
        return;
        const deps = await runSequentially(
          [...Array(24)].map(
            (d, i) => () => cached(getDeps)(...[...args, `${i}:00`])
          )
        )
          .then(
            (results) => results.reduce((acc, d) => [...acc, ...(d || [])], []) // Concatenate results
          )
          .then((results) => uniqBy(results, (d) => d.train.url)); // Dedup based on train url

        deps.forEach(({ time, train, destination }) =>
          console.log(time, train.name, cleanUpStation(destination.name))
        );
        return;
      }
      // train "https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/781761/790366/61386/229894/80"
      // train "https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/892848/833236/124128/235552/80"
      case "train": {
        return cached(getTrain)(...args).then(console.log);
      }
      default:
        console.info("You need to provide a command");
    }
  })
  .catch(console.error);

function cleanUpStation(original) {
  return (
    {
      "Valencia Estacio del Nord": "València Nord",
      "Valencia Joaquin Sorolla": "València Sorolla",
      "Aeroport de Barcelona-El Prat": "Barcelona Aeroport",
      "Murcia del Carmen": "Murcia",
      "Alacant-Terminal": "Alacant",
      "Madrid-Puerta de Atocha": "Madrid Atocha",
      "Madrid-Chamartin": "Madrid Chamartín",
      "Barcelona Hospitalet de Llobregat": "Hospitalet de Llobregat",
      "Lerida/Lleida": "Lleida",
      "Bilbao-Abando": "Bilbo",
      "Barcelona Franca": "Barcelona França",
      "San Sebastian": "Donostia",
    }[original] || original
  );
}
