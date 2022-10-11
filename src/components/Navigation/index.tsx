import React, { useState } from 'react';
import { Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { userSelector } from './../../features/User/UserSlice';
import Header from '../Header';
import MobileDrawer from './MobileDrawer';
import DesktopDrawer from './DesktopDrawer';

export default function Navigation() {
  const { menus } = useSelector(userSelector);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClick = (mobile: boolean) => {
    if (!mobile && !drawerOpen) {
      handleDrawerOpen();
    } else {
      handleDrawerClose();
    }
  };

  return (
    <>
      <Header isDrawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <nav>
        <Hidden mdUp>
          <MobileDrawer
            menus={menus}
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
            handleClick={handleClick}
          />
        </Hidden>
        <Hidden smDown>
          <DesktopDrawer
            menus={menus}
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
            handleClick={handleClick}
          />
        </Hidden>
      </nav>
    </>
  );
}
