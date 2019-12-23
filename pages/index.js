import React, { useState, useEffect } from 'react';
import { EmptyState, Layout, Page, Button, Card } from '@shopify/polaris';
import axios from 'axios';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const IndexPage = () => {

  useEffect(() => {
    getQuizes()
  }, []);

  const [quizes, setQuizes] = useState([]);

  const getQuizes = async () => {
    const quizes = await axios.get('/api/quiz');
    setQuizes(quizes.data);
  }

  const displayQuizes = quizes => {
    return quizes.map(quiz => {
      return (
        <Layout.Section key={quiz._id}>
          <Card title={quiz.quizName} sectioned>
            <p>{quiz.questions.length} questions</p>
          </Card>
        </Layout.Section>

      );
    });
  };

  if (quizes.length > 0) {
    return (
      <Page>
        <Layout>
          {displayQuizes(quizes)}
        </Layout>
      </Page>
    )
  } else {
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
          <Button
            onClick={() => getQuizes()}
          >Get Quizes</Button>
        </Layout>
      </Page>
    );
  }
};

export default IndexPage;
