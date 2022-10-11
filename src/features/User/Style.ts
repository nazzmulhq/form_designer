import { createStyles, Theme } from '@material-ui/core';

const LoginStyles = (theme: Theme) =>
  createStyles({
    mainContainer: {
      background: theme.palette.primary.main,
      width: '100%',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 30,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#FFF',
      width: 300,
      height: 100,
      borderRadius: 50,
    },
    logo: {
      width: '75%',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      background: '#FFF',
      padding: 30,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    copyright: {
      color: '#FFF',
    },
  });

export default LoginStyles;
