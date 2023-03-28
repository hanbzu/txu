import React from "react";
import * as Plot from "@observablehq/plot";
import { useTrain } from "./backend";

function usePlot(opts) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (!opts) return;
    const chart = Plot.plot(opts);
    ref.current?.append(chart);
    return () => chart.remove();
  }, [opts]);

  return () => <div ref={ref} />;
}

export default function App() {
  const Chart = usePlot({
    marks: [Plot.barY(alphabet, { x: "letter", y: "frequency" })],
  });

  const { data } = useTrain(
    "https://reiseauskunft.bahn.de/bin/traininfo.exe/dn/892848/833236/124128/235552/80"
  );

  return (
    <div>
      HI
      <div>
        <Chart />
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const alphabet = [
  { letter: "E", frequency: 0.12702 },
  { letter: "T", frequency: 0.09056 },
  { letter: "A", frequency: 0.08167 },
  { letter: "O", frequency: 0.07507 },
  { letter: "I", frequency: 0.06966 },
  { letter: "N", frequency: 0.06749 },
  { letter: "S", frequency: 0.06327 },
  { letter: "H", frequency: 0.06094 },
  { letter: "R", frequency: 0.05987 },
  { letter: "D", frequency: 0.04253 },
  { letter: "L", frequency: 0.04025 },
  { letter: "C", frequency: 0.02782 },
  { letter: "U", frequency: 0.02758 },
  { letter: "M", frequency: 0.02406 },
  { letter: "W", frequency: 0.0236 },
  { letter: "F", frequency: 0.02288 },
  { letter: "G", frequency: 0.02015 },
  { letter: "Y", frequency: 0.01974 },
  { letter: "P", frequency: 0.01929 },
  { letter: "B", frequency: 0.01492 },
  { letter: "V", frequency: 0.00978 },
  { letter: "K", frequency: 0.00772 },
  { letter: "J", frequency: 0.00153 },
  { letter: "X", frequency: 0.0015 },
  { letter: "Q", frequency: 0.00095 },
  { letter: "Z", frequency: 0.00074 },
];

// Check https://observablehq.com/@observablehq/plot-mareys-trains
const trains = [
  {
    id: "D3751",
    s: `|Paris Austerlitz|22:12
|Les Aubrais - Orléans|23:32
03:59|Souillac|
04:22|Gourdon|
05:01|Cahors|
05:45|Caussade(Tarn-e-Gar)|
06:19|Montauban Ville Bourbon|
07:07|Toulouse-Matabiau|
`,
  },
];
