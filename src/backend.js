import useSWR from "swr";
const BASE_URL = "https://api3.val.town/eval/@hanbzu.";

export function useTrain(dbUrl) {
  const { data, error, isLoading } = useSWR(
    dbUrl,
    (dbUrl) =>
      CACHE.load(dbUrl) ||
      fetch(`${BASE_URL}getReiseauskunftTrain('${encodeURIComponent(dbUrl)}')`)
        .then((res) => res.json())
        .then((d) => d.data)
        .then((data) => CACHE.saveAndReturn(dbUrl, data))
  );
  return { data, error, isLoading };
}

export function useDepartures(stationDbId, date, time) {
  

}

const CACHE = {
  load: (key) => {
    const stored = localStorage.getItem("plotbahn-v1-" + key);
    console.log("stored", key, stored);
    return stored && JSON.parse(stored);
  },
  saveAndReturn: (key, data) => {
    console.log("saveAndReturn", key, data);
    localStorage.setItem("plotbahn-v1-" + key, JSON.stringify(data));
    return data;
  },
};
