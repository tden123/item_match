import React, { Fragment, useState, useCallback } from 'react';
import {
  Page
} from '@shopify/polaris';
import CreateQuestionForm from '../components/CreateQuestionForm';

const Question = () => {
  return (
    <Fragment>
      <Page>
        <CreateQuestionForm />
      </Page>
    </Fragment>
  );
};

export default Question;
