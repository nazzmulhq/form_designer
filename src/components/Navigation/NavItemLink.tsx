import * as React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NavStyles from './Styles';
import { useHistory } from 'react-router-dom';
import { HomeOutlined, ProfileOutlined } from '@ant-design/icons';

type PropsType = {
  title: string;
  url: string;
  onClicked: () => void;
};

export default function NavItemLink(props: PropsType) {
  const { title, url, onClicked } = props;
  const theme = useTheme();
  const useStyles = makeStyles(NavStyles(theme));
  const classes = useStyles();
  const history = useHistory();

  return (
    <ListItem
      className={location.pathname === url ? classes.listItemActive : classes.listItem}
      button
      onClick={() => {
        history.push(url);
        onClicked();
      }}
    >
      <ListItemIcon className={classes.listItemIcon}>{url === '/' ? <HomeOutlined /> : <ProfileOutlined />}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
}
