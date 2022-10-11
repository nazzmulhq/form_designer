import React, { useEffect, useState } from 'react';
import { LinearProgress, Avatar, CssBaseline, TextField, Box, Grid, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from './UserSlice';
import { useHistory } from 'react-router-dom';
import Copyright from './../../components/Copyright';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LoginStyles from './Style';
import { getUserToken } from './UserService';
import { Button, Form, Input } from 'antd';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const theme = useTheme();
  const useStyles = makeStyles(LoginStyles(theme));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const { register, handleSubmit } = useForm<FormValues>();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);
  const [errors, setErrors] = useState<string[]>([]);
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (getUserToken()) {
      history.push('/');
    }
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      if (errorMessage.length) {
        setErrors(errorMessage);
      } else {
        setErrors(['Failed to connect server']);
      }
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }
  }, [isError, isSuccess, dispatch, history, errorMessage]);

  const onFinish = (values: any) => {
    dispatch(loginUser(values));

  };

  return (
    <div className={classes.mainContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img className={classes.logo} src="/images/logo.svg" alt="logo" />
          </Avatar>
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input Username!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input Password!' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" disabled={isFetching}>
                Sign In
              </Button>
            </Form.Item>
          </Form>

          {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              type="text"
              autoComplete="username"
              autoFocus
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register}
            /> */}
          {/* <Button
              disabled={isFetching}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button> */}
          <Grid container>
            <Grid item xs>
              {isFetching && <LinearProgress />}
              {errors.length !== 0 &&
                errors.map((error: string, index: number) => (
                  <Alert key={index} severity="error">
                    {error}
                  </Alert>
                ))}
            </Grid>
          </Grid>

        </div>
        <Box mt={8} className={classes.copyright}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

