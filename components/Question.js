import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { TextField, Layout, Form, FormLayout } from '@shopify/polaris';
import _ from 'lodash';

const Question = () => {

    const [options, setOptions] = useState({
        "Option 1": {
            "value": "",
            "items": []
        },
        "Option 2": {
            "value": "",
            "items": []
        },
        "Option 3": {
            "value": "",
            "items": []
        },
        "Option 4": {
            "value": "",
            "items": []
        }
    });
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

        console.log(options);

        return (
            opts.map(item => {
                const optionName = `Option ${item}`;
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