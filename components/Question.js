import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { TextField, Layout, Form, FormLayout } from '@shopify/polaris';
import _ from 'lodash';

const Question = () => {

    const [options, setOptions] = useState([1]);
    const [question, setQuestion] = useState('');
    const [numOptions, setNumOptions] = useState(1);

    const handleNumOptions = useCallback((option) => setNumOptions(option), []);
    const handleQuestion = useCallback((question) => setQuestion(question), []);
    const handleSubmit = useCallback((_event) => setUrl(''), []);

    useEffect(() => {
        setOptions(_.range(1, parseInt(numOptions, 10) + 1));
    }, [numOptions])


    const displayOptions = (opts) => {
        console.log(options);
        if (!opts) {
            return <div>Loading...</div>
        }
        return (
            opts.map(item => {
                const fullLabel = `Option ${item}`;
                return (
                    <TextField
                        label={fullLabel}
                        type="text"
                        value={''}
                        onChange={() => { }}
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
                        max="4"
                        min="1"
                        value={numOptions}
                        onChange={handleNumOptions}

                    />

                    {displayOptions(options)}
                </FormLayout>
            </Form>

        </Fragment >
    )
}

export default Question;