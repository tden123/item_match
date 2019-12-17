import React, { Fragment, useState, useCallback } from 'react';
import {
  Page
} from '@shopify/polaris';
import CreateQuestionForm from '../components/CreateQuestionForm';
import { UserQuestions } from '../components/UserQuestions';

const Question = () => {
  return (
    <Fragment>
      <Page>
        <CreateQuestionForm />
        <UserQuestions />
      </Page>
    </Fragment>
  );
};

export default Question;
