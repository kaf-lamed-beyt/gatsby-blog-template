import React from "react";
import styled from "styled-components";

const Navbar = styled.header`
  position: fixed;
  border: 1px solid red;
`;

export default function Header() {
  return (
    <Navbar>
      <nav>
        <h3>Webiny Blog with Gatsby</h3>
      </nav>
    </Navbar>
  );
}
