const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Carrie Forde`,
    description: `Carrie Forde is a front end software engineer in San Mateo, California who specializes in building elegant, maintainable, and performant websites.`,
    author: `@carrieforde`,
    socials: {
      mail: 'carrie@carrieforde.com',
      linkedin: 'https://linkedin.com/in/carrieforde',
      github: 'https://github.com/carrieforde',
      codepen: 'https://codepen.io/carrieforde',
      twitter: 'https://twitter.com/carrieforde',
    },
    siteUrl: 'https://carrieforde.com',
  },
  plugins: [
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640,
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
        name: `gatsby-starter-default`,
        short_name: `carrieforde`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3525e6`,
        display: `minimal-ui`,
        icon: `src/images/carrie-forde-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
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
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({
            stage: 0,
            browsers: 'last 2 versions',
            autoprefixer: { grid: true },
            importFrom: './src/styles/settings.css',
          }),
          require('postcss-unit-conversion')({
            base: 18,
            precision: 5,
            toEM: ['letter-spacing', 'text-shadow'],
            toREM: ['font-size', 'margin', 'padding', 'width', 'height'],
          }),
        ],
      },
    },
    '@danbruegge/gatsby-plugin-stylelint',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_ID || null,
      },
    },
    'gatsby-plugin-netlify',
    `gatsby-plugin-offline`,
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
            output: '/rss.xml',
            title: 'Carrie Forde Blog RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/experience/*'],
      },
    },
    'gatsby-plugin-robots-txt',
  ],
};
