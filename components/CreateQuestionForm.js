import React, { useState, useCallback, useEffect } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
import {
  TextField,
  Form,
  FormLayout,
  Button,
  Banner,
  ButtonGroup
} from '@shopify/polaris';
import _ from 'lodash';
import axios from 'axios';

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

  const handleSubmit = useCallback(async () => {
    const payload = {
      name: question,
      items: options
    };
    console.log(payload);
    await axios.get('/api/question');
  });

  const handleChange = (item, value) => {
    const items = options[item] ? options[item].items : [];
    setOptions({
      ...options,
      [item]: { value, items }
    });
  };

  const removeItemTag = (item, title) => {
    const items = options[item].items.filter(i => i.title !== title);
    const value = options[item].value;
    setOptions({
      ...options,
      [item]: { value, items }
    });
    console.log(options);
  };

  const displayOptions = opts => {
    return opts.map(itemNum => {
      return (
        <div key={itemNum}>
          <TextField
            label={`Option ${itemNum}`}
            type='text'
            value={options[itemNum] ? options[itemNum].value : ''}
            onChange={val => handleChange(itemNum, val)}
          />
          {options[itemNum] ? (
            options[itemNum].items.map(item => (
              <React.Fragment key={item.title}>
                <Banner
                  icon=''
                  onDismiss={() => removeItemTag(itemNum, item.title)}
                >
                  <p>{item.title}</p>
                </Banner>
              </React.Fragment>
            ))
          ) : (
              <div />
            )}
          <Button
            onClick={() => {
              setOpen(true);
              setCurrOption(itemNum);
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
              value: options[currOption] ? options[currOption].value : '',
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
