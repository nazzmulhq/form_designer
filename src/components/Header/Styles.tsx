import { createStyles, Theme } from '@material-ui/core';
import { DRAWER_WIDTH } from '../../app/styles';

const HeaderStylesWithTheme = (theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    hide: {
      display: 'none',
    },
    logoButton: {
      alignItems: `center`,
      display: `flex`,
      flex: 1,
      justifyContent: `left`,
      padding: theme.spacing(1),
      border: 'none',
    },
    menuButton: {
      marginRight: 36,
      color: '#EEE',
    },
    toolbarButton: {
      color: theme.palette.primary.main,
    },
    toolbar: {
      backgroundColor: '#1C2336 ',
    },
  });

export default HeaderStylesWithTheme;
