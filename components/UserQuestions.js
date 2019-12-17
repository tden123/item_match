import React, { Fragment, useCallback } from 'react';
import { Button } from '@shopify/polaris';
import axios from 'axios';

export const UserQuestions = () => {

    const handleData = useCallback(async () => {
        try {
            const questions = await axios.get('/api/question');
            console.log(questions);
        } catch (error) {
            console.error(error.message);
        }
    });

    return (
        <Fragment>
            <Button onClick={handleData}>
                Get Data
            </Button>
        </Fragment>
    )
}
