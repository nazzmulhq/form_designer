import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export interface Toast {
  show: boolean;
  msg: string;
  severity: 'error' | 'warning' | 'info' | 'success';
}

export const toastInitial: Toast = {
  show: false,
  msg: '',
  severity: 'info',
}

export default function SimpleSnackbar(props: any) {

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  console.log('snackbar props: ', props);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={props.show}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={props.severity}>
          {props.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
