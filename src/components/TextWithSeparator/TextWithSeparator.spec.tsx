import { render } from "@testing-library/react";
import React from "react";
import { Default, WithCustomSeparator } from "./TextWithSeparator.stories";

describe("TextWithSeparator", () => {
  it("should render the TextWithSeparator component", () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container).toMatchSnapshot();
  });

  it("should render a TextWithSeparator with a custom separator", () => {
    const { container } = render(
      <WithCustomSeparator {...WithCustomSeparator.args} />
    );

    expect(container).toMatchSnapshot();
  });
});
