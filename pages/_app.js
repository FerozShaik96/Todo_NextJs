import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
