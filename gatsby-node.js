const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(".src/templates/blog-post.js");

  const result = await graphql(`
    query Posts {
      webiny {
        listPosts(sort: createdOn_DESC) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            author {
              name
              picture
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.webiny.listPosts.data;

  // Create blog posts pages
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id: post.id,
          createdOn: post.createdOn,
          slug: post.slug,
        },
      });
    });
  }
};
