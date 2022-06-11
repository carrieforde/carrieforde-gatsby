const dynamicPlugins = [];

// Add GA.
if (process.env.GATSBY_GA_ID) {
  dynamicPlugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GATSBY_GA_ID,
    },
  });
}

// Add GTM.
if (process.env.GATSBY_GTM_ID) {
  dynamicPlugins.push({
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: process.env.GATSBY_GTM_ID,
    },
  });
}

module.exports = {
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
    ],
    siteUrl: "https://carrieforde.com",
  },
  plugins: [
    ...dynamicPlugins,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/content/jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 640,
            },
          },
          "gatsby-remark-autolink-headers",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carrie Forde`,
        short_name: `carrieforde`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3525e6`,
        display: `minimal-ui`,
        icon: `src/images/carrie-forde-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(filter: { fileAbsolutePath: { regex: "/posts/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Carrie Forde Blog RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/experience/*"],
      },
    },
    "gatsby-plugin-robots-txt",
  ],
};
