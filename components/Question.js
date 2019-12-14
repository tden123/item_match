import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { TextField, Layout, Form, FormLayout } from '@shopify/polaris';

const Question = () => {

    const [options, setOptions] = useState('');
    const [question, setQuestion] = useState('');
    const [numOptions, setNumOptions] = useState(1);

    const handleNumOptions = useCallback((option) => setNumOptions(option), []);
    const handleQuestion = useCallback((question) => setQuestion(question), []);
    const handleSubmit = useCallback((_event) => setUrl(''), []);

    useEffect(() => {
        setOptions(displayOptions(numOptions));
    }, [numOptions])


    const displayOptions = (options) => {
        return (
        for (let i = 0; i < options; i++) {
            return (
                <TextField
                    label="Option"
                    type="text"
                    value={() => { }}
                    onChange={() => { }}

                />
            )
        }
        )
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
                    max="4"
                    min="1"
                    value={numOptions}
                    onChange={handleNumOptions}

                />
                {options}
            </FormLayout>
        </Form>

    </Fragment >
)
}

export default Question;