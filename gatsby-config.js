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
      twitter: 'https://twitter.com/carrieforde'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`
      }
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
              noInlineHighlight: false
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 640
            }
          }
        ]
      }
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
        icon: `src/images/carrie-forde-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({
            stage: 0,
            browsers: 'last 2 versions',
            autoprefixer: { grid: true },
            importFrom: './src/styles/settings.css'
          }),
          require('postcss-unit-conversion')({
            base: 18,
            precision: 5,
            toEM: ['letter-spacing', 'text-shadow'],
            toREM: ['font-size', 'margin', 'padding', 'width', 'height']
          })
        ]
      }
    },
    '@danbruegge/gatsby-plugin-stylelint'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
