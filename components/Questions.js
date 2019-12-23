import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Card, Layout } from '@shopify/polaris';
import axios from 'axios';

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
          <p>some info</p>
        </Card>
      </Layout.Section>);
  });

  return <Layout>{displayQuestions}</Layout>;
};

export default Questions;