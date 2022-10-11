import { createStyles, Theme } from '@material-ui/core';

export const DRAWER_WIDTH = 270;

export const customizeAppStylesWithTheme = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
    },
    root: {
      display: 'flex',
      backgroundColor: theme.palette.common.white,
    },
    toolbar: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  });
