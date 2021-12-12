import React from "react";
import { render } from "@testing-library/react";
import { Next, Previous, PreviousNext } from "./Pagination.stories";

describe("Pagination", () => {
  const getComponentPieces = (container: HTMLElement) => {
    const previous = container.querySelector(".previous");
    const next = container.querySelector(".next");

    return {
      previous,
      next,
    };
  };

  it("should display only the previous post", () => {
    const { container } = render(<Previous {...Previous.args} />);
    const { previous, next } = getComponentPieces(container);

    expect(previous).toBeTruthy();
    expect(next).toBeNull();
  });

  it("should display only the next post", () => {
    const { container } = render(<Next {...Next.args} />);
    const { previous, next } = getComponentPieces(container);

    expect(previous).toBeNull();
    expect(next).toBeTruthy();
  });

  it("should display both the previous and next post", () => {
    const { container } = render(<PreviousNext {...PreviousNext.args} />);
    const { previous, next } = getComponentPieces(container);

    expect(previous).toBeTruthy();
    expect(next).toBeTruthy();
  });
});
