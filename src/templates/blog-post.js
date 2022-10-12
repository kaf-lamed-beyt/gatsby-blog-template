import { graphql } from "gatsby";
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";
import React from "react";

export default BlogPost = ({ data, location }) => {
  const post = data.webiny.getPost.data;

  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <RichTextRenderer data={post.body} />
    </React.Fragment>
  );
};

export const pageQuery = graphql`
  query PostBySlug($slug: String) {
    webiny {
      getPosts(where: { slug: $slug }) {
        data {
          id
          slug
          title
          excerpt
          createdOn
          featuredImage
          body
          author {
            name
            picture
            authorsBio
            slug
          }
        }
      }
    }
  }
`;
