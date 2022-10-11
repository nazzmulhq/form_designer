import { makeStyles, Theme } from '@material-ui/core';

const subHeaderStyle = makeStyles((theme: Theme) => ({
  formHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(1),
  },
  formAction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '128px',
  },

  formName: {
    paddingLeft: theme.spacing(2),
    width: '200%',
  },
  formTitle: {
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: '1.25rem',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(241, 245, 249)',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  layoutSettings: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
  },
  formTextEditable: {
    outline: 'none',
    border: '1px solid transparent',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    width: '100%',
    "&:hover": {
      border: '1px solid lightgray',
    },
    "&:focus": {
      backgroundColor: 'white',
    }
  }
}));

export default subHeaderStyle;
