import { graphql } from "gatsby";
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";
import React from "react";

export default function BlogPost({ pageContext }) {
  const { title, body, createdOn } = pageContext;

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <RichTextRenderer data={body} />
    </React.Fragment>
  );
}

// export const pageQuery = graphql`
//   query PostBySlug($slug: String) {
//     webiny {
//       getPosts(where: { slug: $slug }) {
//         data {
//           id
//           slug
//           title
//           excerpt
//           createdOn
//           featuredImage
//           body
//           author {
//             name
//             picture
//             authorsBio
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
