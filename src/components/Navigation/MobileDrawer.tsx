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

export default function MobileDrawer({
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
      variant="temporary"
      classes={{
        paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
      }}
      open={drawerOpen}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className={classes.toolbarIcon}>
        <div className={classes.navlogo}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <IconButton onClick={handleDrawerClose}>
          <LeftOutlined />
        </IconButton>
      </div>
      <Divider />
      <List>
        <React.Fragment>
          {menus.map((menu: any, index: number) =>
            menu.items ? (
              <NavLink
                key={menu.id + index}
                {...menu}
                mobile={true}
                open={drawerOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleClick={handleClick}
              />
            ) : (
              <NavItemLink
                key={menu.id + index}
                title={menu.title}
                url={menu.url}
                onClicked={() => handleClick(true)}
              />
            ),
          )}
        </React.Fragment>
      </List>
    </Drawer>
  );
}
