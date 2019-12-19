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

  const resourceName = {
    singular: 'Quiz',
    plural: 'Quizes'
  };

  const getItems = async () => {
    let user = await axios.get('/api/question');
    console.log(user);
    setQuestions(user.data.questions);
  };

  const handleSubmit = async () => {
    await axios.post('/api/quiz/create_quiz', selectedItems);
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
            value={''}
            onChange={() => {}}
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
            Add to Quiz
          </Button>
        </FormLayout>
      </Form>
    </Fragment>
  ) : (
    <Fragment>Loading...</Fragment>
  );
};

export default CreateQuiz;
