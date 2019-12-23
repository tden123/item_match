import {
  Form,
  FormLayout,
  TextField,
  Button,
  ResourceList,
  ResourceItem,
  Card,
  Frame,
  Toast,
  TextStyle,
  Link
} from '@shopify/polaris';
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const CreateQuiz = () => {
  useEffect(() => {
    getItems();
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState('');

  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Quiz created" onDismiss={toggleActive} duration={1000} />
  ) : null;

  const resourceName = {
    singular: 'Question',
    plural: 'Questions'
  };

  const getItems = async () => {
    let user = await axios.get('/api/question');
    setQuestions(user.data.questions);
  };

  const resetState = () => {
    setSelectedItems([]);
    setQuizName('');
  }

  const handleSubmit = async () => {
    await axios.post('/api/quiz/create_quiz', { selectedItems, quizName }).then(resetState());
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
      <Link url="/quizes">Back to quizes</Link>
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

          <Button primary submit onClick={toggleActive}>
            Create Quiz
          </Button>
        </FormLayout>
      </Form>
      <Frame>{toastMarkup}</Frame>
    </Fragment>
  ) : (
      <Fragment>Loading...</Fragment>
    );
};

export default CreateQuiz;
