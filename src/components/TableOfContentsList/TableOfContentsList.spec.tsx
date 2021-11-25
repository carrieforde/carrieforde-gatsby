import React from "react";
import { render } from "@testing-library/react";
import { MultiLevel, SingleLevel } from "./TableOfContentsList.stories";

describe("TableOfContentsList", () => {
  it("should correctly render a single-level list", () => {
    const { container } = render(<SingleLevel {...SingleLevel.args} />);
    const items = container.querySelectorAll("li");
    expect(items.length).toEqual(SingleLevel.args.listItems.length);
  });

  it("should correctly render a multi-level list", () => {
    const { container } = render(<MultiLevel {...MultiLevel.args} />);
    const lists = container.querySelectorAll("ol");
    expect(lists.length).toEqual(5);
  });
});
