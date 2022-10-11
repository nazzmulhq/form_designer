import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WrapperStyle from './Style';

type WrapperProps = {
  children: JSX.Element;
};

//content wrapper for every authenticated pages
const Wrapper = ({ children }: WrapperProps) => {
  const theme = useTheme();
  const useStyles = makeStyles(WrapperStyle(theme));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default Wrapper;
