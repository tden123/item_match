import React, { Fragment, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  Layout,
  Form,
  FormLayout,
  Button,
  ButtonGroup
} from '@shopify/polaris';
import _ from 'lodash';

const Question = () => {
  const [options, setOptions] = useState({
    'Option 1': '',
    'Option 2': '',
    'Option 3': '',
    'Option 4': ''
  });
  const [question, setQuestion] = useState('');
  const [numOptions, setNumOptions] = useState(2);

  const handleAddOption = useCallback(() => {
    if (numOptions > 4) {
      setNumOptions(4), [];
    } else if (numOptions < 2) {
      setNumOptions(2), [];
    } else if (numOptions !== 4) {
      setNumOptions(numOptions + 1), [];
    }
  });

  const handleRemoveOption = useCallback(() => {
    if (numOptions > 4) {
      setNumOptions(4), [];
    } else if (numOptions < 2) {
      setNumOptions(2), [];
    } else if (numOptions !== 2) {
      setNumOptions(numOptions - 1), [];
    }
  });

  const handleQuestion = useCallback(question => setQuestion(question), []);
  const handleSubmit = useCallback(_event => setUrl(''), []);

  const displayOptions = opts => {
    if (!opts) {
      return <div>Loading...</div>;
    }

    return opts.map(item => {
      const optionName = `Option ${item}`;
      return (
        <TextField
          label={optionName}
          name={optionName}
          type='text'
          value={options[optionName]}
          onChange={e => console.log(e)}
          key={item}
        />
      );
    });
  };

  return (
    <Fragment>
      <Form noValidate onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={question}
            onChange={handleQuestion}
            label='Question'
            type='text'
            placeholder='Which of the following do you prefer, etc'
          />
          <ButtonGroup>
            {numOptions === 4 ? (
              <Button primary disabled>
                Add Option
              </Button>
            ) : (
              <Button primary onClick={handleAddOption}>
                Add Option
              </Button>
            )}

            {numOptions === 2 ? (
              <Button secondary disabled>
                Remove Option
              </Button>
            ) : (
              <Button secondary onClick={handleRemoveOption}>
                Remove Option
              </Button>
            )}
          </ButtonGroup>

          {displayOptions(_.range(1, parseInt(numOptions, 10) + 1))}
        </FormLayout>
      </Form>
    </Fragment>
  );
};

export default Question;
