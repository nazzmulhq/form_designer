import * as React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, useTheme, Menu, MenuItem } from '@material-ui/core';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { removeUserToken } from './../../features/User/UserService';
import HeaderStylesWithTheme from './Styles';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

export interface HeaderProps {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
}

function Header(headerProps: HeaderProps) {
  const { isDrawerOpen, handleDrawerOpen } = headerProps;
  const theme = useTheme();
  const useStyles = makeStyles(HeaderStylesWithTheme(theme));
  const styleClasses = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    removeUserToken();
    history.push('/');
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(styleClasses.appBar, {
        [styleClasses.appBarShift]: isDrawerOpen,
      })}
    >
      <Toolbar style={{ justifyContent: 'flex-end', backgroundColor: 'white' }}>
        <div className={clsx(styleClasses.logoButton)}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(styleClasses.menuButton, {
              [styleClasses.hide]: isDrawerOpen,
            })}
          >
            <MenuOutlined />
          </IconButton>
        </div>
        <div style={{ display: 'flex' }}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            className={clsx(styleClasses.toolbarButton)}
          >
            {/* <AccountCircle /> */}
            <UserOutlined />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            keepMounted={true}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
