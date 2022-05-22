import { render, screen } from "@testing-library/react";
import MergeFieldProvider from "components/MergeField/MergeField.context";
import React from "react";
import { ICON_MAP } from "./CallOut";
import { Default, Info, WithMergeField } from "./CallOut.stories";

const wrapper: React.FC = ({ children }) => (
  <MergeFieldProvider data={{ animal: "turtle" }}>
    {children}
  </MergeFieldProvider>
);

describe("CallOut", () => {
  it("should render a callout", () => {
    const { container } = render(<Default {...Default.args} />);

    expect(screen.getByText(Default.args.children)).toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("should render a callout with an icon", () => {
    const { container } = render(<Info {...Info.args} />);

    expect(screen.getByText(Info.args.children)).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(container.querySelector("svg")).toHaveAttribute(
      "data-icon",
      ICON_MAP.info
    );
  });

  it("should render a callout with a merge field", () => {
    render(<WithMergeField {...WithMergeField.args} />, {
      wrapper,
    });

    expect(screen.getByText("I like turtles")).toBeInTheDocument();
  });
});
