import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';

type ErrorLoadingProps = {
  error?: boolean;
  loading?: boolean;
};

//Showing Loading state and server error
const ErrorLoading = ({ loading, error }: ErrorLoadingProps) => {
  return (
    <div style={{ width: '100%', minHeight: 5, background: '#FFF' }}>
      {loading && <LinearProgress />}
      {error && <Alert severity="error">An Error Occured</Alert>}
    </div>
  );
};

export default ErrorLoading;
