import React from "react";
import { render } from "@testing-library/react";
import { Default, IsSmall, Updated } from "./TimeStamp.stories";

describe("TimeStamp", () => {
  it("should correctly render a timestamp", () => {
    const { container } = render(<Default {...Default.args} />);
    expect(container.firstChild.textContent).toEqual(Default.args.date);
  });

  it("should correctly indicate post was updated", () => {
    const { container } = render(<Updated {...Updated.args} />);
    expect(container.firstChild).toHaveTextContent(
      `Updated: ${Updated.args.date}`
    );
  });

  it("should apply a class for small text", () => {
    const { container } = render(<IsSmall {...IsSmall.args} />);
    expect(container.firstChild).toHaveClass("timeStamp timeStampIsSmall");
  });
});
