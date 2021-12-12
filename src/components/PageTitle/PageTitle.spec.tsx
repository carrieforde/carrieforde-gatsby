import React from "react";
import { render } from "@testing-library/react";
import { ShortTitle, WithMarkup } from "./PageTitle.stories";

describe("PageTitle", () => {
  it("should correctly render a title", () => {
    const { container } = render(<ShortTitle {...ShortTitle.args} />);
    expect(container.firstChild).toHaveTextContent(ShortTitle.args.title);
  });

  it("should correctly render a title with markup", () => {
    const { container } = render(<WithMarkup {...WithMarkup.args} />);
    expect(container.firstElementChild.innerHTML).toEqual(
      WithMarkup.args.title
    );
  });
});
