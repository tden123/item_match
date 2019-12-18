import React, { Fragment, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const UserQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    handleData();
  }, [questions]);

  const handleData = useCallback(async () => {
    try {
      const user = await axios.get('/api/question');
      setQuestions(user.data.questions);
    } catch (error) {
      console.error(error.message);
    }
  });

  const displayQuestions = questions.map(q => {
    return <div key={q._id}>{q.question}</div>;
  });

  return <Fragment>{displayQuestions}</Fragment>;
};
