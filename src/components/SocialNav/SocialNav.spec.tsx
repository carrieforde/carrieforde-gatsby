import React from "react";
import { render, screen } from "@testing-library/react";
import { SocialNavMenu } from "./SocialNav.stories";
import { mocked } from "ts-jest/utils";
import { useStaticQuery } from "gatsby";

const useStaticQueryMock = mocked(useStaticQuery);

describe("SocialNav", () => {
  beforeAll(() => {
    useStaticQueryMock.mockReturnValue({
      site: {
        siteMetadata: {
          socials: [
            {
              label: "Email",
              value: "mailto:carrie@carrieforde.com",
              icon: ["fal", "paper-plane"],
            },
            {
              label: "LinkedIn",
              value: "https://linkedin.com/in/carrieforde",
              icon: ["fab", "linkedin-in"],
            },
            {
              label: "Github",
              value: "https://github.com/carrieforde",
              icon: ["fab", "github"],
            },
            {
              value: "CodePen",
              label: "https://codepen.io/carrieforde",
              icon: ["fab", "codepen"],
            },
          ],
          siteUrl: "https://carrieforde.com",
        },
      },
    });
  });

  it("should render the correct number of items", () => {
    render(<SocialNavMenu />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
