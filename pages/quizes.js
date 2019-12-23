import React from 'react';
import Quizes from '../components/Quizes';
import { Page, Layout } from '@shopify/polaris';

const QuizPage = () => {
    return (
        <Page>
            <Layout>
                <Quizes />
            </Layout>
        </Page>
    );
}

export default QuizPage;
