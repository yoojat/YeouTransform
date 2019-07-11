import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    const initialProps = await Document.getInitialProps(ctx);

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="극단 여운 7회 청년 워크샵 공연 변신입니다"
          />
          <meta name="keyword" content="연극 변신 여운" />
          <meta name="author" content="yoojat" />
          <meta name="Distribution" content="creplay" />
          <meta name="Copyright" content="creplay" />
          <meta name="robots" content="idnex,follow" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="극단 여운 변신" />
          <meta property="og:url" content="https://transform-yeoun.now.sh/" />
          {/* FIXME: url 수정할것 */}

          <meta property="og:image" content="/static/img/yeoun/poster.png" />
          {/* FIXME: 이미지 url 수정할것 */}
          <meta property="og:description" content="극단 여운 변신" />
          <link href="/static/menuStyles.css" rel={"stylesheet"} />

          <link href="/static/styles.css" rel={"stylesheet"} />

          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/img/main/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/static/img/main/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/static/img/main/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/img/main/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/img/main/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/img/main/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/img/main/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/img/main/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/main/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/img/main/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/main/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/img/main/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/main/favicon/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          {/* <Header /> */}
          <Main />
          <NextScript />
          {/* <Footer /> */}
        </body>
      </html>
    );
  }
}
