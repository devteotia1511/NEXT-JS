import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
