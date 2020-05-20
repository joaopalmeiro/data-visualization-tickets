import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";
import ticketEnum from "./helpers/ticketEnum";
import PropTypes from "prop-types";
import { Info } from "vega";
import "../assets/main.css";

const Ticket = ({ spec }) => {
  const chartEl = useRef();

  const tags = spec.hasOwnProperty("usermeta") ? spec.usermeta.tags || [] : [];
  const description = spec.description || "No description available.";
  const name = spec.name || "Example chart";
  const vegaLiteOrVegaFat = spec.$schema;

  // SVG renderer generates global CSS rules: https://github.com/vega/vega/issues/2618
  // Solution: Vega v5.12.1

  useEffect(() => {
    vegaEmbed(chartEl.current, spec, {
      renderer: ticketEnum.RENDERER,
      scaleFactor: ticketEnum.SCALE_FACTOR,
      downloadFileName: name,
      sourceHeader: ticketEnum.SOUCE_HEADER,
      i18n: {
        SOURCE_ACTION: ticketEnum.SOURCE_ACTION,
      },
      logLevel: Info,
      formatLocale: ticketEnum.LOCALE,
    });
  }, [spec, name]);

  // https://vega.github.io/schema/vega-lite/v4.json
  // https://vega.github.io/schema/vega/v5.json
  const re = /(\w+-?\w+)\/\w([.\d]+)\.json$/;
  const schema = vegaLiteOrVegaFat.match(re);
  const lib = schema[1];
  // const version = schema[2];

  return (
    <div className="flex border-2 rounded border-gray-300 last:mb-8">
      <div className="w-full py-2 px-2 my-auto">
        <div className="align-middle" ref={chartEl}></div>
      </div>
      <div className="w-1/3 py-2 px-2 bg-gray-100 border-dotted border-l-4 flex flex-col border-gray-300">
        <div className="px-4 py-2 m-2 text-black text-lg">
          <strong className="mr-1">{name}</strong>
          <span className="text-xs font-light">
            {lib === "vega" ? "V" : "VL"}
          </span>
        </div>
        <div className="h-full px-4 py-2 m-2 text-black">{description}</div>
        <div className="px-4 py-2 m-2 space-y-1 text-black text-xs lowercase font-light">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-300 rounded-full px-3 py-1 mr-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  spec: PropTypes.object.isRequired,
};

export default Ticket;
