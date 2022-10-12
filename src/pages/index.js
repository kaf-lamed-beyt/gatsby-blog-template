import * as React from "react";

const IndexPage = () => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <h3>Webiny Blog with Gatsby</h3>
        </nav>
      </header>
      <main></main>
    </React.Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
