import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "@testing-library/react";
import Ticket from "./Ticket";
import exampleSpec from "../charts/bar-chart.json";

describe("<Ticket />", () => {
  it("has no visual regressions", async () => {
    render(<Ticket spec={exampleSpec} />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });
});
