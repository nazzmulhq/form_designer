import { createStyles, Theme } from '@material-ui/core';

const FormStyle = (theme: Theme) =>
  createStyles({
    root: {
      '& button': {
        margin: '15px !important',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  });

export default FormStyle;
