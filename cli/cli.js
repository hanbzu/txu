#!/usr/bin/env node
import { argv } from "node:process";
import { getDeps, getTrain } from "./api.js";
import crypto from "crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import runSequentially from "../jslib/runSequentially.js";
import uniqBy from "../jslib/uniqBy.js";
import wait from "../jslib/wait.js";

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
  .then(() => {
    switch (cmd) {
      // deps "7100064" "23.03.31"
      case "deps":
        return runSequentially(
          [...Array(24)].map(
            (d, i) => () => cached(getDeps)(...[...args, `${i}:00`])
          )
        )
          .then(
            (results) => results.reduce((acc, d) => [...acc, ...(d || [])], []) // Concatenate results
          )
          .then((results) => uniqBy(results, (d) => d.train.url)) // Dedup based on train url
          .then((res) => {
            res.forEach(({ time, train, destination }) =>
              console.log(time, train.name, cleanUpStation(destination.name))
            );
          });
      // train "https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/781761/790366/61386/229894/80"
      // train "https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/892848/833236/124128/235552/80"
      case "train":
        return cached(getTrain)(...args).then(console.log);
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
