import React, { useState, useEffect } from 'react';
import { Layout, Card, Link } from '@shopify/polaris';
import axios from 'axios';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Quizes = () => {

    useEffect(() => {
        getQuizes()
    }, []);

    const [quizes, setQuizes] = useState([]);

    const getQuizes = async () => {
        const quizes = await axios.get('/api/quiz');
        setQuizes(quizes.data);
    }

    const displayQuizes = quizes => {
        return quizes.map(quiz => {
            return (
                <Layout.Section key={quiz._id}>
                    <Card title={quiz.quizName} sectioned>
                        <p>{quiz.questions.length} questions</p>
                    </Card>
                </Layout.Section>

            );
        });
    };

    if (quizes.length > 0) {
        return (
            <React.Fragment>
                <Layout.Section>
                    <Link url="/create-quiz">Create New</Link>
                </Layout.Section>
                {displayQuizes(quizes)}
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                Loading...
            </React.Fragment>


        );
    }
};

export default Quizes;
