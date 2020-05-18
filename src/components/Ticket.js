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
    <div className="flex border-2 rounded border-gray-300">
      <div className="w-full py-2 px-2">
        <div className="align-middle" ref={chartEl}></div>
      </div>
      <div className="w-1/3 py-2 px-2 bg-gray-100 border-dotted border-l-4 flex flex-col border-gray-300">
        <div className="flex-grow px-4 py-2 m-2 text-black text-lg">
          <strong>Bar Chart</strong>
        </div>
        <div className="h-full px-4 py-2 m-2 text-black">
          This is a bar chart to plot some bars as a chart. And another
          description could be this one.
        </div>
        <div className="px-4 py-2 m-2 space-y-1 text-black text-xs lowercase font-light">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mr-1">
            Pill1plus
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mr-1">
            Pills
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mr-1">
            Pill2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
