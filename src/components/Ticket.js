import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";

const Ticket = () => {
  const chartEl = useRef();

  useEffect(() => {
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v4.json",
      description: "A simple bar chart with embedded data.",
      usermeta: "teste",
      title: "Oi",
      padding: { left: 0, top: 0, right: 5, bottom: 0 },
      height: 300,
      width: 300,
      data: {
        values: [
          { a: "A", b: 28 },
          { a: "B", b: 55 },
          { a: "C", b: 43 },
          { a: "D", b: 91 },
          { a: "E", b: 81 },
          { a: "F", b: 53 },
          { a: "G", b: 19 },
          { a: "H", b: 87 },
          { a: "I", b: 52 },
        ],
      },
      mark: "bar",
      encoding: {
        x: { field: "a", type: "ordinal", axis: { labelAngle: 0 } },
        y: { field: "b", type: "quantitative" },
      },
    };
    vegaEmbed(chartEl.current, yourVlSpec);
  }, []);

  return (
    <div className="flex border-2 rounded border-gray-200">
      <div className="w-full py-2 px-2">
        <div className="align-middle" ref={chartEl}></div>
      </div>
      <div className="w-1/3 py-2 px-2 bg-gray-200 border-dotted border-l-4 flex flex-col">
        <div className="flex-grow px-4 py-2 m-2">
          <strong>Bar Chart</strong>
        </div>
        <div className="h-full px-4 py-2 m-2">
          This is a bar chart to plot some bars as a chart.
        </div>
        <div className="px-4 py-2 m-2 space-y-2">
          <span className="inline-block bg-gray-400 rounded-full px-4 py-2 mr-2">
            Pill1
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-4 py-2 mr-2">
            Pills
          </span>
          <span className="inline-block bg-gray-400 rounded-full px-4 py-2 mr-2">
            Pill2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
