import * as React from "react";
import Header from "../components/Header";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo";
import { IndexWrapper, BlogPosts } from "./style/home.styled";
import Post, { FeaturedPost } from "../components/Post";

const IndexPage = ({ data }) => {
  // const {
  //   data: { webiny },
  // } = data;

  // console.log(webiny);

  const posts = data.webiny.listPosts.data;

  const latestPost = posts[0];

  console.log(latestPost);

  // const {
  //   webiny: {
  //     listPosts: { data },
  //   },
  // } = posts;

  return (
    <React.Fragment>
      <Seo title="Holla Seo" />
      <IndexWrapper>
        <Header />
        <BlogPosts>
          <FeaturedPost data={latestPost} />
          {posts?.map((items) => {
            return <Post data={items} />;
          })}
        </BlogPosts>
      </IndexWrapper>
    </React.Fragment>
  );
};

export default IndexPage;

export const posts = graphql`
  query posts {
    webiny {
      listPosts(sort: createdOn_DESC) {
        data {
          id
          slug
          title
          excerpt
          createdOn
          featuredImage
          author {
            name
          }
        }
      }
    }
  }
`;
