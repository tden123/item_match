import React, { Fragment, useState, useCallback, useEffect } from 'react';
import {
  TextField,
  Layout,
  Form,
  FormLayout,
  Button,
  ButtonGroup,
  Card
} from '@shopify/polaris';
import _ from 'lodash';

const Question = () => {
  const [options, setOptions] = useState({
    1: { value: '' },
    2: { value: '' },
    3: { value: '' },
    4: { value: '' }
  });
  const [question, setQuestion] = useState('');
  const [numOptions, setNumOptions] = useState(2);

  const handleAddOption = useCallback(() => {
    if (numOptions > 4) {
      setNumOptions(4);
    } else if (numOptions < 2) {
      setNumOptions(2);
    } else if (numOptions !== 4) {
      setNumOptions(numOptions + 1);
    }
  });

  const handleRemoveOption = useCallback(() => {
    if (numOptions > 4) {
      setNumOptions(4);
    } else if (numOptions < 2) {
      setNumOptions(2);
    } else if (numOptions !== 2) {
      if (options[4].value !== '' && numOptions === 4) options[4].value = '';
      if (options[3].value !== '' && numOptions === 3) options[3].value = '';
      setNumOptions(numOptions - 1);
    }
  });

  const handleQuestion = useCallback(question => setQuestion(question), []);
  const handleSubmit = useCallback(_event => setUrl(''), []);
  const handleChange = (item, val) =>
    setOptions({ ...options, [item]: { value: val } });

  const displayOptions = opts => {
    return opts.map(item => {
      return (
        <TextField
          label={`Option ${item}`}
          type='text'
          value={options[item].value}
          onChange={val => handleChange(item, val)}
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
