import { createStyles, Theme } from '@material-ui/core';

const CardStyle = (theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      background: theme.palette.background.paper,
    },
    paperHeader: {
      width: '100%',
      color: theme.palette.primary.dark,
      padding: 15,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 600,
      marginLeft: 5,
    },
    backButton: {
      float: 'right',
      background: theme.palette.primary.light,
      fontWeight: 600,
      '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.palette.background.paper,
      },
    },
    addButton: {
      background: theme.palette.primary.light,
      color: theme.palette.secondary.dark,
      float: 'right',
      '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.palette.background.paper,
      },
    },
    iconSize: {
      fontSize: 15,
    },
  });

export default CardStyle;
