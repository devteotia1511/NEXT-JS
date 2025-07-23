'use client';

import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import CustomDashboard from './CustomDashboard';
import CustomLayout from './CustomLayout';
import customTheme from './theme';

import UserList from './UserList';
import UserEdit from './UserEdit';
import UserCreate from './UserCreate';

const AdminApp = () => {
  return (
    <Admin
      dashboard={CustomDashboard}
      dataProvider={dataProvider}
      theme={customTheme}
      layout={CustomLayout}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
};

export default AdminApp;