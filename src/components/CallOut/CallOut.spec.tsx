import React from "react";
import { render } from "@testing-library/react";
import { Default, Info, WithMergeField } from "./CallOut.stories";
import MergeFieldProvider from "components/MergeField/MergeField.context";

const wrapper: React.FC = ({ children }) => (
  <MergeFieldProvider data={{ animal: "turtle" }}>
    {children}
  </MergeFieldProvider>
);

describe("CallOut", () => {
  const getComponentPieces = (container: HTMLElement) => {
    const callout = container.querySelector(".callOut");
    const text = container.querySelector("p");
    const icon = container.querySelector("svg");

    return {
      callout,
      text,
      icon,
    };
  };

  it("should render a callout", () => {
    const { container } = render(<Default {...Default.args} />);
    const { callout, text, icon } = getComponentPieces(container);

    expect(callout).toHaveClass("callOut");
    expect(text.textContent).toEqual(Default.args.text);
    expect(icon).toBeNull();
  });

  it("should render a callout with an icon", () => {
    const { container } = render(<Info {...Info.args} />);
    const { callout, text, icon } = getComponentPieces(container);

    expect(callout).toHaveClass("callOut info");
    expect(text.textContent).toEqual(Info.args.text);
    expect(icon).toBeTruthy();
  });

  it("should render a callout with a merge field", () => {
    const { container } = render(<WithMergeField {...WithMergeField.args} />, {
      wrapper,
    });
    const { text } = getComponentPieces(container);

    expect(text.textContent).toEqual("I like turtles");
  });
});
