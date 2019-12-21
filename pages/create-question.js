import React, { Fragment, useState, useCallback } from 'react';
import {
  Page
} from '@shopify/polaris';
import CreateQuestion from '../components/CreateQuestion';
import { UserQuestions } from '../components/UserQuestions';

const Question = () => {
  return (
    <Fragment>
      <Page>
        <CreateQuestion />
        <UserQuestions />
      </Page>
    </Fragment>
  );
};

export default Question;
