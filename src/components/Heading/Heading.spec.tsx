import { render } from "@testing-library/react";
import React from "react";
import { H1, H2 } from "./Heading.stories";

describe("Heading", () => {
  it("should render the Heading component as an h1", () => {
    const { container } = render(<H1 {...H1.args} />);
    expect(container).toMatchSnapshot();
  });

  it("should render the Heading component as an h2", () => {
    const { container } = render(<H2 {...H2.args} />);
    expect(container).toMatchSnapshot();
  });
});
