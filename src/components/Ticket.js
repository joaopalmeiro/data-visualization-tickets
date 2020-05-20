import React from "react";
import PropTypes from "prop-types";
import "../assets/main.css";
import Renderer from "./Renderer";

const Ticket = ({ spec }) => {
  const tags = spec.hasOwnProperty("usermeta") ? spec.usermeta.tags || [] : [];
  const description = spec.description || "No description available.";
  const name = spec.name || "Example chart";
  const vegaLiteOrVegaFat = spec.$schema;

  // https://vega.github.io/schema/vega-lite/v4.json
  // https://vega.github.io/schema/vega/v5.json
  const re = /(\w+-?\w+)\/\w([.\d]+)\.json$/;
  const schema = vegaLiteOrVegaFat.match(re);
  const lib = schema[1];
  // const version = schema[2];

  return (
    <div className="flex border-2 rounded border-gray-300 last:mb-8">
      <div className="w-full py-2 px-2 my-auto">
        <Renderer spec={spec} downloadFilename={name} />
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
