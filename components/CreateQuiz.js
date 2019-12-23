import {
  Form,
  FormLayout,
  TextField,
  Button,
  ResourceList,
  ResourceItem,
  Card,
  TextStyle
} from '@shopify/polaris';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const CreateQuiz = () => {
  useEffect(() => {
    getItems();
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState('');

  const resourceName = {
    singular: 'Question',
    plural: 'Questions'
  };

  const getItems = async () => {
    let user = await axios.get('/api/question');
    console.log(user);
    setQuestions(user.data.questions);
  };

  const resetInputs = () => {
    setSelectedItems([]);
    setQuestions([]);
    setQuizName('');
  }

  const handleSubmit = async () => {
    await axios.post('/api/quiz/create_quiz', { selectedItems, quizName });
    resetInputs();
  };

  function renderItem(item) {
    const { question, _id } = item;
    return (
      <ResourceItem id={_id}>
        <h3>
          <TextStyle variation='strong'>{question}</TextStyle>
        </h3>
      </ResourceItem>
    );
  }

  return questions.length > 0 ? (
    <Fragment>
      <Form noValidate onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={quizName}
            onChange={value => setQuizName(value)}
            label='Create Quiz'
            type='text'
            placeholder='Find Shoe Quiz...'
          />

          <Card>
            <ResourceList
              resourceName={resourceName}
              items={questions}
              renderItem={renderItem}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              selectable
            />
          </Card>

          <Button primary submit>
            Create Quiz
          </Button>
        </FormLayout>
      </Form>
    </Fragment>
  ) : (
      <Fragment>Loading...</Fragment>
    );
};

export default CreateQuiz;
