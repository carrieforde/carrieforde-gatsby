import React from "react";
import { render } from "@testing-library/react";
import { SocialNavMenu } from "./SocialNav.stories";

describe("SocialNav", () => {
  it("should render the correct number of items", () => {
    const { container } = render(<SocialNavMenu {...SocialNavMenu.args} />);
    const menuItems = container.querySelectorAll(".socialNavItem");
    expect(menuItems.length).toEqual(SocialNavMenu.args.socials.length);
  });
});
