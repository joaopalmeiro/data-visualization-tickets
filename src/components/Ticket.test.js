import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "@testing-library/react";
import Ticket from "./Ticket";
import spec from "../charts/bar-chart.json";

it("has no visual regressions", async () => {
  render(<div />);

  const screenshot = await generateImage();
  expect(screenshot).toMatchImageSnapshot();
});
