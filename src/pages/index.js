import * as React from "react";
import Header from "../components/Header";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo";
import { BlogPosts } from "./style/home.styled";

const IndexPage = ({ data }) => {
  // const {
  //   data: { webiny },
  // } = data;

  // console.log(webiny);

  // const post = data.webiny.listPosts.data;

  const {
    webiny: {
      listPosts: { data },
    },
  } = data;

  // const {
  //   webiny: {
  //     listPosts: { data },
  //   },
  // } = posts;

  return (
    <React.Fragment>
      <Seo title="Holla Seo" />
      <Header />
      <BlogPosts>
        {post.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
      </BlogPosts>
    </React.Fragment>
  );
};

export default IndexPage;

export const posts = graphql`
  query posts {
    webiny {
      listPosts(sort: createdOn_DESC) {
        data {
          slug
          title
          featuredImage
          id
        }
      }
    }
  }
`;
