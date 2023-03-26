#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";
import { argv } from "node:process";

// The stations CSV file was downloaded from https://raw.githubusercontent.com/trainline-eu/stations/master/stations.csv
// Courtesy of Trainline EU in https://github.com/trainline-eu/stations
const [, , inputFile, outputFile] = argv;
const csv = await readFile(argv[2]);
const stations = parse(csv, { columns: true, delimiter: ";", bom: true });
const extract = stations
  .map(({ id, name, parent_station_id, db_id }) => ({
    id: +id,
    parentId: parent_station_id !== "" ? +parent_station_id : undefined,
    dbId: +db_id,
    name,
  }))
  .filter((d) => d.dbId !== "");
await writeFile(outputFile, JSON.stringify(extract, null, 2));
// extract.forEach((d) => console.log(Object.values(d).join(" ")));
