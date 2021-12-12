import { render } from "@testing-library/react";
import React from "react";
import { Default } from "./GridList.stories";

describe("GridList", () => {
  it("should render a bulleted GridList component", () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container).toMatchSnapshot();
  });
});
