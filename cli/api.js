import { JSDOM } from "jsdom";
import { writeFile } from "node:fs/promises";

export function getTrain(url) {
  function cleanTime(time) {
    const cleaned = time
      .trim()
      .replace("Ankunft\nan ", "")
      .replace("Abfahrt\nab ", "");
    return cleaned === "" ? undefined : cleaned;
  }

  return fetch(url)
    .then((res) => res.text())
    .then((html) => {
      const dom = new JSDOM(html);

      return {
        route: [
          ...dom.window.document.querySelectorAll(
            "#trainroute > .trainrow_1, .trainrow_2"
          ),
        ].map((row) => {
          return {
            station: {
              code: extractStationCodeFromUrl(
                row.querySelector(".station > a")
              ),
              name: row.querySelector(".station > a").textContent.trim(),
            },
            arr: cleanTime(row.querySelector(".arrival").textContent),
            dep: cleanTime(row.querySelector(".departure").textContent),
          };
        }),
        remarks: dom.window.document
          .querySelector(".tqRemarks")
          ?.textContent?.trim()
          ?.replace("Hinweise\n", ""),
      };
    });
}

export function getDeps(station, date, hour) {
  function extractStops(string) {
    const regex =
      /(\w+(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?(?: \w+)?) \n(\d{2}:\d{2})/g;
    const matches = [...string.matchAll(regex)].map((match) => ({
      station: match[1],
      arr: match[2],
    }));
    return matches;
  }

  return fetch(
    `https://reiseauskunft.bahn.de/bin/bhftafel.exe/dn?${new URLSearchParams({
      input: station,
      date: "24.03.23",
      time: hour,
      boardType: "dep",
      start: "Suchen",
    }).toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    }
  )
    .then((res) => res.text())
    .then((html) => {
      const dom = new JSDOM(html);

      if (
        !(
          dom.window.document
            .querySelector("#sqResult > h2 > strong")
            ?.textContent?.trim() || ""
        ).startsWith("Aktueller Abfahrtsplan von")
      ) {
        return writeFile("./private/error-page.html", html).then(() => {
          throw new Error(
            dom.window.document
              .querySelector(".error")
              ?.textContent?.trim()
              ?.replace("Hinweis", "")
              ?.replaceAll("\n", " ")
              ?.replace(/\s+/g, " ")
          );
        });
      }

      const rows = dom.window.document.querySelectorAll(
        "#sqResult > table.result.stboard.dep > tbody > tr[id^='journeyRow']"
      );

      return [...rows].map((row) => {
        const destinationAnchor = row.querySelector(".route > span > a");
        const destinationName = destinationAnchor?.textContent?.trim();
        return {
          time: row.querySelector(".time")?.textContent?.trim(),
          train: {
            url: row.querySelector(".train > a").href.split("?")[0],
            name: [
              ...row.querySelectorAll(".train > a"),
            ][1]?.textContent?.trim(),
          },
          destination: {
            name: destinationName,
            code: extractStationCodeFromUrl(
              "https://reiseauskunft.bahn.de" + destinationAnchor?.href
            ),
          },
          stops: extractStops(
            (row.querySelector(".route")?.textContent || "")
              ?.trim()
              .substring(destinationName.length)
          ),
          query: `${station} ${date} ${hour}`,
        };
      });
    })
    .catch((err) => {
      console.error(`Error with query ${station} | ${date} | ${hour}`, err);
      throw new Error("Failing process");
    });
}

function extractStationCodeFromUrl(url) {
  return new URLSearchParams(new URL(url)?.search)
    ?.get("input")
    ?.split("#")?.[1];
}
