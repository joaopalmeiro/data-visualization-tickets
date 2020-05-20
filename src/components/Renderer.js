import React, { useEffect, useRef } from "react";
import vegaEmbed from "vega-embed";
import { Info } from "vega";
import rendererEnum from "./helpers/rendererEnum";
import PropTypes from "prop-types";
import "../assets/main.css";
import "../assets/tooltip.css";

const Renderer = ({ spec, downloadFilename }) => {
  const chartEl = useRef();

  // SVG renderer generates global CSS rules: https://github.com/vega/vega/issues/2618
  // Solution: Vega v5.12.1

  useEffect(() => {
    vegaEmbed(chartEl.current, spec, {
      renderer: rendererEnum.RENDERER,
      scaleFactor: rendererEnum.SCALE_FACTOR,
      downloadFileName: downloadFilename,
      sourceHeader: rendererEnum.SOUCE_HEADER,
      i18n: {
        SOURCE_ACTION: rendererEnum.SOURCE_ACTION,
      },
      logLevel: Info,
      formatLocale: rendererEnum.LOCALE,
      tooltip: rendererEnum.TOOLTIP_OPTIONS,
    })
      .then(function ({ view }) {
        // View API: https://vega.github.io/vega/docs/api/view/
        if (spec.width < 200) {
          view.width(200);
        }
        view.run();
      })
      .catch(console.error);
  }, [spec, downloadFilename]);

  return <div className="align-middle" ref={chartEl}></div>;
};

// More info: https://reactjs.org/docs/typechecking-with-proptypes.html
// It is similar to Python's type hints
Renderer.propTypes = {
  spec: PropTypes.object.isRequired,
  downloadFilename: PropTypes.string.isRequired,
};

export default Renderer;
