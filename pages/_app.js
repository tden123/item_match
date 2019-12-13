import App from "next/app";
import Head from "next/head";
import { Fragment } from "react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Item Bundler</title>
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default MyApp;
