import App, { Container } from "next/app";
import React from "react";
// import withApollo from "../lib/withApollo";
// import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
// import RightSideBar from "../components/RightSideBar";
// import "react-dropdown/style.css";
// import "react-image-gallery/styles/css/image-gallery.css";

class MyApp extends App {
  // render되기전에 불리는 함수
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* <ApolloProvider client={apollo}> */}
        <Container>
          {/* <RightSideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
          <Component id={"page-wrap"} {...pageProps} />
        </Container>
        {/* </ApolloProvider> */}
      </ThemeProvider>
    );
  }
}

// export default MyApp;
export default MyApp;
