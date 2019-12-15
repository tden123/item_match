import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
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
        1: { value: '', items: [] },
        2: { value: '', items: [] },
        3: { value: '', items: [] },
        4: { value: '', items: [] }
    });
    const [question, setQuestion] = useState('');
    const [numOptions, setNumOptions] = useState(2);
    const [open, setOpen] = useState(false);
    const [currOption, setCurrOption] = useState(0);

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
    const handleChange = (item, val) => {
        setOptions({ ...options, [item]: { value: val, items: options[item].items } });
    };
    const handleAddItemsToOption = useCallback(() => { })

    const displayOptions = opts => {
        return opts.map(item => {
            return (
                <div key={item}>
                    <TextField
                        label={`Option ${item}`}
                        type='text'
                        value={options[item].value}
                        onChange={val => handleChange(item, val)}
                    />
                    <Button
                        onClick={() => {
                            setOpen(true);
                            setCurrOption(item);
                            console.log(`currOption: ${currOption}, open: ${open}`)
                        }}
                    >Add Item</Button>
                </div>
            );
        });
    };

    return (
        <Fragment>

            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={(resources) => {
                    setOptions({
                        ...options,
                        [currOption]: { value: options[currOption].value, items: resources.selection }
                    })
                    setOpen(false);
                    setCurrOption(0);
                }
                }
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

                    <Button primary onClick={() => console.log(options)}>Submit</Button>
                </FormLayout>
            </Form>
        </Fragment>
    );
};

export default Question;
