import React from "react";
import { generateImage } from "jsdom-screenshot";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("has no visual regressions", async () => {
    render(<Header title={"Data Visualization Tickets"} />);

    const screenshot = await generateImage();
    expect(screenshot).toMatchImageSnapshot();
  });
});
