import React from "react";
import Ticket from "./Ticket";
import { generateKey } from "./helpers/utils";

const TicketGrid = () => {
  // Source: https://github.com/gatsbyjs/gatsby/issues/3663
  // Docs: https://webpack.js.org/api/module-methods/#requirecontext
  const req = require.context("../charts", false, /.*\.json$/);

  return (
    <div className="flex flex-col space-y-8">
      {req.keys().map((key, index) => (
        <Ticket key={generateKey(index)} spec={req(key)} />
      ))}
    </div>
  );
};

export default TicketGrid;
