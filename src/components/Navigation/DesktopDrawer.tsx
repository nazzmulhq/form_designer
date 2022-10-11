import React from 'react';
import clsx from 'clsx';
import { List, Drawer, IconButton, Divider } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavStyles from './Styles';
import NavLink from './NavLink';
import NavItemLink from './NavItemLink';
import { LeftOutlined } from '@ant-design/icons';

type PropsType = {
  menus: any[];
  drawerOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
  handleClick: (mobile: boolean) => void;
};

export default function DesktopDrawer({
  menus,
  drawerOpen,
  handleDrawerClose,
  handleDrawerOpen,
  handleClick,
}: PropsType) {
  const theme = useTheme();
  const useStyles = makeStyles(NavStyles(theme));
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
    >
      <div className={classes.toolbarIcon}>
        <div className={classes.navlogo}>
          {/* <img src="/images/logo.svg" alt="logo" /> */}
          Form Designer
        </div>
        <IconButton onClick={handleDrawerClose}>
          <LeftOutlined />
        </IconButton>
      </div>
      <Divider />
      <List>
        <React.Fragment>
          <NavItemLink key={79} title="Projects" url="/" onClicked={() => handleClick(false)} />
        </React.Fragment>
      </List>
    </Drawer>
  );
}
