import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Quattrocento Sans', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 768px;
  padding: 16px;
  margin: auto;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <Container>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
          <link
            href="https://fonts.googleapis.com/css?family=Quattrocento+Sans"
            rel="stylesheet"
          />
        </Helmet>
      )}
    />

    <GlobalStyles />

    <main style={{ flex: 1 }}>{children}</main>

    <p>Sticky footer</p>
  </Container>
);

export default Layout;
