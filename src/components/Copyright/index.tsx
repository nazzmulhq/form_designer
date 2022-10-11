import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mpower-social.com/">
        Form Builder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
