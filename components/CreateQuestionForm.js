import React, { useState, useCallback, useEffect } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
import {
  TextField,
  Form,
  FormLayout,
  Button,
  ButtonGroup
} from '@shopify/polaris';
import _ from 'lodash';

const CreateQuestionForm = () => {
  const [options, setOptions] = useState({});
  const [question, setQuestion] = useState('');
  const [numOptions, setNumOptions] = useState(2);
  const [open, setOpen] = useState(false);
  const [currOption, setCurrOption] = useState(0);

  const handleAddOption = useCallback(() => {
    if (numOptions >= 4) {
      setNumOptions(4);
    } else {
      setNumOptions(numOptions + 1);
    }
  });

  const handleRemoveOption = useCallback(() => {
    if (numOptions <= 2) {
      setNumOptions(2);
    } else {
      if (numOptions === 4) {
        setOptions({
          1: options[1],
          2: options[2],
          3: options[3]
        });
      } else if (numOptions === 3) {
        setOptions({
          1: options[1],
          2: options[2]
        });
      }
      setNumOptions(numOptions - 1);
    }
  });

  const handleQuestion = useCallback(question => setQuestion(question), []);

  const handleSubmit = useCallback(() => {
    const payload = {
      question,
      options
    };
    console.log(payload);
  });

  const handleChange = (item, value) => {
    const items = options[item] ? options[item].items : [];
    setOptions({
      ...options,
      [item]: { value, items }
    });
  };

  const displayOptions = opts => {
    return opts.map(item => {
      return (
        <div key={item}>
          <TextField
            label={`Option ${item}`}
            type='text'
            value={options[item] ? options[item].value : ''}
            onChange={val => handleChange(item, val)}
          />
          <Button
            onClick={() => {
              setOpen(true);
              setCurrOption(item);
            }}
          >
            Add Item
          </Button>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <ResourcePicker
        resourceType='Product'
        showVariants={false}
        open={open}
        onSelection={resources => {
          setOptions({
            ...options,
            [currOption]: {
              value: options[currOption].value,
              items: resources.selection
            }
          });
          setOpen(false);
          setCurrOption(0);
        }}
        onCancel={() => {
          setOpen(false);
          setCurrOption(0);
        }}
      />

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

          <Button primary onClick={handleSubmit}>
            Submit
          </Button>
        </FormLayout>
      </Form>
    </React.Fragment>
  );
};

export default CreateQuestionForm;
