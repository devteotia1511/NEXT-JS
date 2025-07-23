"use client"
import * as React from 'react';
import { Menu, MenuItemLink, useSidebarState } from 'react-admin';
import PeopleIcon from '@mui/icons-material/People';
import PostIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CollapsibleSection = ({ title, children, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="w-full">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between px-4 py-2 font-semibold text-gray-600 hover:bg-gray-100"
      >
        {isSidebarOpen ? (
          <>
            <span>{title}</span>
            {open ? <ExpandLess /> : <ExpandMore />}
          </>
        ) : null}
      </div>
      {open && <div className={`${isSidebarOpen ? 'pl-4' : 'pl-0'}`}>{children}</div>}
    </div>
  );
};

const CustomMenu = () => {
  const [isSidebarOpen] = useSidebarState();

  return (
    <Menu>
      <CollapsibleSection title="Users" isSidebarOpen={isSidebarOpen}>
        <MenuItemLink
          to="/users"
          primaryText={isSidebarOpen ? 'Manage Users' : ''}
          leftIcon={<PeopleIcon />}
          // sidebarIsOpen={isSidebarOpen}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Posts" isSidebarOpen={isSidebarOpen}>
        <MenuItemLink
          to="/posts"
          primaryText={isSidebarOpen ? 'All Posts' : ''}
          leftIcon={<PostIcon />}
          // sidebarIsOpen={isSidebarOpen}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Settings" isSidebarOpen={isSidebarOpen}>
        <MenuItemLink
          to="/settings"
          primaryText={isSidebarOpen ? 'Preferences' : ''}
          leftIcon={<SettingsIcon />}
          // sidebarIsOpen={isSidebarOpen}
        />
      </CollapsibleSection>
    </Menu>
  );
};

export default CustomMenu;