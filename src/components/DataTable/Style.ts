import { createStyles, Theme } from '@material-ui/core';

const TableStyle = (theme: Theme) =>
  createStyles({
    root: {
      '& button': {
        margin: '15px !important',
      },
    },
    table: {
      width: '98.4%',
      background: '#FFF',
      margin: 10,
    },
    dtHeaderCell: {
      background: '#C7E6FC',
      textAlign: 'center',
      fontWeight: 600,
      padding: 10,
      color: theme.palette.primary.dark,
    },
    dtCell: {
      textAlign: 'center',
      padding: 20,
    },
    noData: {
      padding: 20,
      textAlign: 'center',
      display: 'block',
      marginTop: 70,
      color: '#c23616',
      fontSize: 20,
      background: '#FFF',
    },
  });

export default TableStyle;
