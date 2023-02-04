import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Carrie Forde`,
    description: `Carrie Forde is a front end software engineer in San Mateo, California who specializes in building elegant, maintainable, and performant websites.`,
    author: `@carrieforde`,
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
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`,
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "jobs",
        path: `${__dirname}/content/jobs`,
      },
      __key: "jobs",
    },
  ],
};

export default config;
