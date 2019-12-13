import App from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Item Bundler</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps} />
        </AppProvider>
      </Fragment>
    );
  }
}

export default MyApp;
