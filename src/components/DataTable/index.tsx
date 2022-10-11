import React, { useState } from 'react';
import {
  Checkbox,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TableStyle from './Style';
import { DeleteFilled } from '@ant-design/icons';


type DataTableProps = {
  columns: any[];
  data: any[];
  idField?: string;
  statusField?: string;
  statusUpdate?: (id: string, status: boolean) => void;
  deleteField?: string;
  deleteItem?: (id: string) => void;
};

const DataTable = ({ columns, data, idField, statusField, deleteField, statusUpdate, deleteItem }: DataTableProps) => {
  const theme = useTheme();
  const useStyles = makeStyles(TableStyle(theme));
  const classes = useStyles();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteID, setDeleteID] = useState('');

  const handleDeleteClick = (id: string) => {
    setDeleteOpen(true);
    setDeleteID(id);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const confirmedDelete = () => {
    if (deleteItem) {
      deleteItem(deleteID);
    }
    setDeleteOpen(false);
  };

  //For Showing column data or JSX element
  const renderCell = (item: any, column: any) => {
    if (column.content) {
      return column.content(item);
    }
    return item[column.key];
  };

  if (Array.isArray(data) && data.length) {
    return (
      <>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {statusField && (
                  <TableCell component="th" className={classes.dtHeaderCell}>
                    Status
                  </TableCell>
                )}
                <TableCell component="th" className={classes.dtHeaderCell}>
                  SL
                </TableCell>
                {columns.map((column) => (
                  <TableCell key={Math.random()} component="th" className={classes.dtHeaderCell}>
                    {column.label}
                  </TableCell>
                ))}
                {deleteField && (
                  <TableCell key={Math.random()} component="th" className={classes.dtHeaderCell}>
                    Delete
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index + Math.random()}>
                  {statusField && (
                    <TableCell className={classes.dtCell} component="td" scope="row">
                      {statusField && (
                        <Checkbox
                          checked={item[statusField] === 1 ? true : false}
                          onChange={() => statusUpdate && idField && statusUpdate(item[idField], item[statusField])}
                        />
                      )}
                    </TableCell>
                  )}
                  <TableCell className={classes.dtCell} component="td" scope="row">
                    {index + 1}
                  </TableCell>
                  {columns.map((column, k) => (
                    <TableCell key={k} className={classes.dtCell} component="td" scope="row">
                      {renderCell(item, column)}
                    </TableCell>
                  ))}
                  {deleteField && (
                    <TableCell className={classes.dtCell} component="td" scope="row">
                      <IconButton size="small" onClick={() => deleteField && handleDeleteClick(item[deleteField])}>
                        <DeleteFilled />
                      </IconButton>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {deleteField && (
          <Dialog
            open={deleteOpen}
            onClose={handleDeleteClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">This data will delete permanently!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteClose} color="primary" variant="contained">
                Cancel
              </Button>
              <Button onClick={confirmedDelete} className="buttonDanger" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </>
    );
  } else {
    return <div className={classes.noData}>Data Unavailable</div>;
  }
};

export default DataTable;
