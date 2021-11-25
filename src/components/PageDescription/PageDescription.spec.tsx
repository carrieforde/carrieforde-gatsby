import React from "react";
import { render } from "@testing-library/react";
import { Complex, Simple } from "./PageDescription.stories";
import PageDescription from "./PageDescription";

describe("PageDescription", () => {
  it("should render a single line description", () => {
    const { container } = render(<Simple {...Simple.args} />);
    expect(container.firstChild).toHaveTextContent(Simple.args.description);
  });

  it("should render a multi-line description with markup", () => {
    const { container } = render(<Complex {...Complex.args} />);
    expect(container.children.length).toEqual(
      Complex.args.multiLineDescription.length
    );
    expect(container.firstElementChild.nextElementSibling).toContainHTML(
      '<a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>'
    );
  });

  it("should render nothing when nothing is passed", () => {
    const { container } = render(<PageDescription />);
    expect(container.firstChild).toBeNull();
  });
});
