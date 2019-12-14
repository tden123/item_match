import React, { Fragment, useState, useCallback } from 'react';
import {
  Form,
  FormLayout,
  TextField,
  Page,
  Layout,
  Button
} from '@shopify/polaris';
import Question from '../components/Question';

const Create = () => {
  return (
    <Fragment>
      <Page>
        <Question />
      </Page>
    </Fragment>
  );
};

export default Create;
