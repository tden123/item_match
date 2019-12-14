import React, { Component } from 'react';
import { EmptyState, Layout, Page } from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading='Item Bundler'
          action={{
            content: 'Get Started',
            onAction: () => {
              console.log('clicked');
            }
          }}
          image={img}
        >
          <p>Create helpful quizes for your customer</p>
        </EmptyState>
      </Layout>
    </Page>
  );
};

export default Index;
