import React, { Fragment, useState, useCallback } from 'react';
import {
  Page
} from '@shopify/polaris';
import CreateQuestion from '../components/CreateQuestion';

const CreateQuestionPage = () => {
  return (
    <Page>
      <CreateQuestion />
    </Page>
  );
};

export default CreateQuestionPage;
