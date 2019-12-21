import App from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { AppProvider } from "@shopify/polaris";
import { Provider } from '@shopify/app-bridge-react';
import "@shopify/polaris/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Cookies from 'js-cookie';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = {
      apiKey: API_KEY,
      shopOrigin: Cookies.get('shopOrigin'),
      forceRedirect: true
    }

    return (
      <Fragment>
        <Head>
          <title>Item Bundler</title>
          <meta charSet="utf-8" />
        </Head>
        <ReduxProvider store={store}>
          <Provider config={config}>
            <AppProvider i18n={translations}>
              <Component {...pageProps} />
            </AppProvider>
          </Provider>
        </ReduxProvider>

      </Fragment>
    );
  }
}

export default MyApp;
