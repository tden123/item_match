import {
  Form,
  FormLayout,
  TextField,
  Button,
  ResourceList,
  ResourceItem,
  Card,
  TextStyle
} from '@shopify/polaris';
import React, { Fragment, useState } from 'react';

const CreateQuiz = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: 'customer',
    plural: 'customers'
  };

  const items = [
    {
      id: 341,
      url: 'customers/341',
      name: 'Mae Jemison',
      location: 'Decatur, USA'
    },
    {
      id: 256,
      url: 'customers/256',
      name: 'Ellen Ochoa',
      location: 'Los Angeles, USA'
    }
  ];

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit')
    }
  ];

  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags')
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags')
    },
    {
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete')
    }
  ];

  function renderItem(item) {
    const { id, url, name, location } = item;
    //const media = <Avatar customer size='medium' name={name} />;

    return (
      <ResourceItem
        id={id}
        url={url}
        //media={media}
        accessibilityLabel={`View details for ${name}`}
      >
        <h3>
          <TextStyle variation='strong'>{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceItem>
    );
  }

  return (
    <Fragment>
      <Form noValidate onSubmit={() => {}}>
        <FormLayout>
          <TextField
            value={''}
            onChange={() => {}}
            label='Question'
            type='text'
            placeholder='Which of the following do you prefer, etc'
          />

          <Card>
            <ResourceList
              resourceName={resourceName}
              items={items}
              renderItem={renderItem}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              promotedBulkActions={promotedBulkActions}
              bulkActions={bulkActions}
            />
          </Card>

          <Button primary submit>
            Submit
          </Button>
        </FormLayout>
      </Form>
    </Fragment>
  );
};

export default CreateQuiz;
