"use client";
import { Layout } from 'react-admin';
import CustomAppBar from './CustomAppBar';
import CustomMenu from './CustomMenu';

const CustomLayout = (props) => (
  <Layout
    {...props}
    appBar={CustomAppBar}
    menu={CustomMenu}
  />
);

export default CustomLayout;