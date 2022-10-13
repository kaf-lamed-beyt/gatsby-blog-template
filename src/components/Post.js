import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import dayjs from "dayjs";

const Card = styled.div`
  width: 350px;
  height: 290px;
  margin-bottom: 50px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  img {
    height: 180px;
    width: 100%;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }

  .article-info {
    padding: var(--mobile-xs-pad);

    .article-title {
      font-size: 20px;
      font-weight: 500;
      height: 80px;
    }

    .footnote {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
  }
`;

export default function Post({
  data: {
    id,
    slug,
    title,
    createdOn,
    featuredImage,
    author: { name },
  },
}) {
  return (
    <Link to={slug} style={{ textDecoration: "none", color: "#000" }}>
      <Card>
        <img src={featuredImage} alt={`${title}'s cover image`} />
        <div className="article-info">
          <p className="article-title">{title}</p>
          <div className="footnote">
            <p className="author">{name}</p>
            <p className="date">{dayjs(createdOn).format("MMMM, D, YYYY")}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

const FeaturedCard = styled.div`
  width: 100% !important;
  display: flex;
  height: 500px;
  border-radius: 20px;
  background: var(--bg-main);
  justify-content: space-between;
  margin: 30px 0 50px 0;

  img {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .article-info {
    width: 440px;
    padding: 15px 9px 0px 9px;

    .article-title {
      font-size: 45px;
      font-weight: bold;
    }

    .date {
      color: var(--main);
    }

    .article-excerpt {
      padding: 20px 0;
    }
  }
`;

export const FeaturedPost = ({
  data: {
    slug,
    title,
    excerpt,
    createdOn,
    featuredImage,
    author: { name },
  },
}) => {
  return (
    <Link to={slug} style={{ textDecoration: "none", color: "#fff" }}>
      <FeaturedCard>
        <img src={featuredImage} alt={`${title}'s cover image`} />
        <div className="article-info">
          <p className="article-title">{title}</p>
          <p className="date">{dayjs(createdOn).format("MMMM, D, YYYY")}</p>
          <p className="article-excerpt">{excerpt}</p>
        </div>
      </FeaturedCard>
    </Link>
  );
};
