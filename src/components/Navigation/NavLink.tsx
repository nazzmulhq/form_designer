import * as React from 'react';
import { Collapse, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavStyles from './Styles';
import NavItemLink from './NavItemLink';
import { DownOutlined, ProfileOutlined, UpOutlined } from '@ant-design/icons';

type PropsType = {
  open: boolean;
  mobile: boolean;
  title: string;
  items: any[];
  handleDrawerOpen: () => void;
  handleClick: (mobile: boolean) => void;
};

export default function NavLink(props: PropsType) {
  const { open, title, items, handleClick, handleDrawerOpen, mobile } = props;
  const theme = useTheme();
  const useStyles = makeStyles(NavStyles(theme));
  const classes = useStyles();
  const [isDropDown, setIsDropDown] = React.useState<boolean>(false);

  const handleDropDownList = () => {
    setIsDropDown(!isDropDown);
    handleDrawerOpen();
  };

  return (
    <React.Fragment>
      <ListItem className={classes.listItem} button onClick={() => handleDropDownList()}>
        <ListItemIcon className={classes.listItemIcon}>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary={title} />
        {isDropDown ? <UpOutlined /> : <DownOutlined />}
      </ListItem>
      <Collapse in={open && isDropDown} timeout="auto" unmountOnExit={true}>
        <List component="div" disablePadding={true} style={{ marginLeft: theme.spacing(3) }}>
          {items.map((elm: any, index: number) => (
            <NavItemLink
              key={elm.title + index}
              title={elm.title}
              url={elm.url}
              onClicked={() => {
                handleClick(mobile);
                setIsDropDown(true);
              }}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
}
