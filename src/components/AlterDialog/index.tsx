import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props: any) {
  const getName=()=>{
    return props.nodeProps.node === undefined ? "" : props.nodeProps.node.title;
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onNoClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {getName()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onYesClick} color="primary">
            Yes
          </Button>
          <Button onClick={props.onNoClick}color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
