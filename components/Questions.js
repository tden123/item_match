import React, { useCallback, useEffect, useState } from 'react';
import { Card, Layout, Link } from '@shopify/polaris';
import axios from 'axios';
import _ from 'lodash';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = useCallback(async () => {
    try {
      const user = await axios.get('/api/question');
      setQuestions(user.data.questions);
    } catch (error) {
      console.error(error.message);
    }
  });

  const displayQuestions = questions.map(q => {
    return (
      <Layout.Section key={q._id}>
        <Card title={q.question} sectioned>
          <p>{_.size(q.options)} options</p>
        </Card>
      </Layout.Section>
    );
  });

  return (
    <Layout>
      <Layout.Section>
        <Link url="/create-question">Create New</Link>
      </Layout.Section>
      {displayQuestions}
    </Layout>);
};

export default Questions;