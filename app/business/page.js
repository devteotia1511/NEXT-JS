'use client';

import { Admin, Resource } from 'react-admin';
import { ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from './dataProvider';
import { useAuth } from './auth/AuthProvider';
import LoginPage from './auth/LoginPage';
import customTheme from './theme';
import CustomLayout from './resources/CustomLayout';
import CustomDashboard from './resources/CustomDashboard';
import UserList from './resources/UserList';
import UserEdit from './resources/UserEdit';
import UserCreate from './resources/UserCreate';

export default function BusinessPage() {
  const { authenticated } = useAuth();

  if (!authenticated) return <LoginPage />;

  return (
    <Admin
      dashboard={CustomDashboard}
      dataProvider={dataProvider}
      theme={customTheme}
      layout={CustomLayout}
    >
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
      <Resource name="posts" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
}