import React from 'react';
import { Route } from 'react-router-dom';
import { getUserToken } from './../features/User/UserService';
import Login from '../features/User/Login';

export const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => (getUserToken() ? <Component {...props} /> : <Login />)} />
);
