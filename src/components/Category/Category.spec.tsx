import React from "react";
import { render } from "@testing-library/react";
import { Default } from "./Category.stories";

describe("Category", () => {
  it("should render a category with a link", () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container.firstChild).toHaveTextContent(Default.args.category);
  });
});
