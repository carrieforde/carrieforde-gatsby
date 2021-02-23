const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const slugify = (slug) => slug.replace(/\s/g, '-').toLowerCase();
const getPostSlug = (slug) => {
  const splitSlug = slug.split('/');
  return `/${splitSlug[splitSlug.length - 1]}/`;
};

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`,
      trailingSlash: false,
    });

    createNodeField({
      node,
      name: 'slug',
      value: getPostSlug(slug),
    });
  }

  if (node.internal.type === 'allMdx') {
    const category = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`,
    });

    createNodeField({
      node,
      name: 'category',
      value: category,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query Content {
      pages: allMdx(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
          }
        }
      }
      categories: allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const { pages, posts, categories } = result.data;

  posts.edges.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve('./src/templates/Post/Post.tsx'),
      context: {
        slug: post.node.fields.slug,
        previous: post.previous ? post.previous : null,
        next: post.next ? post.next : null,
      },
    });
  });

  pages.edges.forEach((page) => {
    createPage({
      path: page.node.fields.slug.includes('home')
        ? '/'
        : page.node.fields.slug,
      component: path.resolve('./src/templates/Page/Page.tsx'),
      context: {
        slug: page.node.fields.slug,
      },
    });
  });

  categories.group.forEach((category) => {
    createPage({
      path: `category/${slugify(category.fieldValue)}`,
      component: path.resolve('./src/templates/Category/Category.tsx'),
      context: {
        category: category.fieldValue,
      },
    });
  });
};

// Fix polyfill for webcomponents.
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /cf-alert/,
            use: loaders.null(),
          },
          {
            test: /@alcatraz-components\/accordion/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
