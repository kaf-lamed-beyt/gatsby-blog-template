import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./src/themes/theme";
import "./src/styles/globals.scss";

const {
  fonts: { main, code },
} = theme;

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html, body {
        font-family: ${main};
        height: 100%;
        background-color: #fff;
    }
`;

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
};
