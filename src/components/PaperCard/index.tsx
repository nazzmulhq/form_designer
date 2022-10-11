import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ErrorLoading from '../ErrorLoading';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardStyle from './Style';
import { BarsOutlined, LeftOutlined, PlusSquareOutlined } from '@ant-design/icons';

type PaperCardProps = {
  error?: boolean;
  loading?: boolean;
  backUrl?: string;
  addUrl?: string;
  children: JSX.Element;
  title: string;
};

//Full width Paper element with header and back button
const PaperCard = ({ children, title, error, loading, backUrl, addUrl }: PaperCardProps) => {
  const theme = useTheme();
  const useStyles = makeStyles(CardStyle(theme));
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ErrorLoading error={error} loading={loading} />
        <Paper className={classes.paper}>
          <div className={classes.paperHeader}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <span className={classes.headerTitle}>
                  <BarsOutlined /> {title}
                </span>
              </Grid>
              <Grid item xs={6}>
                {backUrl && (
                  <Button size="small" variant="contained" className={classes.backButton} component={Link} to={backUrl}>
                    <LeftOutlined className={classes.iconSize} /> Back
                  </Button>
                )}
                {addUrl && (
                  <Button size="small" variant="contained" className={classes.addButton} component={Link} to={addUrl}>
                    <PlusSquareOutlined />Add
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PaperCard;
