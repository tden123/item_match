import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { TextField, Layout, Form, FormLayout } from '@shopify/polaris';
import _ from 'lodash';

const Question = () => {

    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState('');
    const [numOptions, setNumOptions] = useState(1);

    const handleNumOptions = useCallback((option) => {
        if (option > 4) {
            setNumOptions(4), []
        } else {
            setNumOptions(option), []
        }
    });
    const handleQuestion = useCallback((question) => setQuestion(question), []);
    const handleSubmit = useCallback((_event) => setUrl(''), []);


    const displayOptions = (opts) => {
        if (!opts) {
            return <div>Loading...</div>
        }

        return (
            opts.map(item => {
                const optionName = `Option ${item}`;
                //setOptions([...options, optionName]);
                return (
                    <TextField
                        label={optionName}
                        type="text"
                        value={''}
                        onChange={(event) => console.log(event)}
                        key={item}
                    />
                )
            }))
    }

    return (
        <Fragment>
            <Form noValidate onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        value={question}
                        onChange={handleQuestion}
                        label="Question"
                        type="text"
                        placeholder="Which of the following do you prefer, etc"
                    />
                    <TextField
                        label="Number of options"
                        type="number"
                        maxLength="1"
                        max="4"
                        min="1"
                        value={numOptions}
                        onChange={handleNumOptions}

                    />
                    {displayOptions(_.range(1, parseInt(numOptions, 10) + 1))}
                </FormLayout>
            </Form>

        </Fragment >
    )
}

export default Question;