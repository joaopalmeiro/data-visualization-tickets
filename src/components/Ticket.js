import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";

const Ticket = (props) => {
  const chartEl = useRef();

  const tags = props.spec.hasOwnProperty("usermeta")
    ? props.spec.usermeta.tags || []
    : [];
  const description = props.spec.description || "No description available.";
  const name = props.spec.name || "Example chart";
  const vegaLiteOrVegaFat = props.spec.$schema;

  const sourceHeader = `
    <script>
      const style = document.createElement("link"); 
      style.href = "ascetic-mod.css";
      style.rel = "stylesheet";
      style.type = "text/css";
      document.head.appendChild(style); 
      
      const script = document.createElement("script"); 
      script.src = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.0.0/highlight.min.js";
      script.onload = () => hljs.highlightBlock(document.querySelector("pre"));
      document.head.appendChild(script);
    </script>
  `;

  useEffect(() => {
    vegaEmbed(chartEl.current, props.spec, {
      renderer: "svg",
      scaleFactor: 5,
      downloadFileName: name,
      defaultStyle: true,
      sourceHeader: sourceHeader,
      i18n: {
        SOURCE_ACTION: "View Source Spec",
      },
    });
  }, [props.spec, name, sourceHeader]);

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

export default Ticket;
