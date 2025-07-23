import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = (props) => (
  <List {...props}
    className='m-4'>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="website" />
    </Datagrid>
  </List>
);

export default UserList;