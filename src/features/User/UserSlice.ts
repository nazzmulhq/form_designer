import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LOGIN_ENDPOINT, USER_MENUS_ENDPOINT } from './../../configs/ServerUrl';
import { setUserInfo, setUserToken } from './UserService';
import { postRequest, fetchAuthorizedData } from './../../helpers/ServiceHelper';

type LoginData = {
  username: string;
  password: string;
};

export const loginUser = createAsyncThunk('users/login', async ({ username, password }: LoginData, thunkAPI) => {
  try {
    const response = await postRequest(LOGIN_ENDPOINT, { username, password });
    if (response.token) {
      setUserToken(response.token);
      setUserInfo(JSON.stringify(response.user));
      return response;
    } else {
      return thunkAPI.rejectWithValue(response);
    }
  } catch (e) {
    console.log('Error', e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const fetchUserMenusBytoken = createAsyncThunk('user/menus', async ({ userID }: any, thunkAPI) => {
  try {
    const response = await fetchAuthorizedData(USER_MENUS_ENDPOINT, { user_id: userID });
    if (response.status === 200) {
      return { ...response };
    } else {
      return thunkAPI.rejectWithValue(response);
    }
  } catch (e) {
    console.log('Error', e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    menus: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled as any]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.user_id = payload.user.pk;
      state.email = payload.user.email;
      state.username = payload.user.username;
      state.first_name = payload.user.first_name;
      state.last_name = payload.user.last_name;
      return state;
    },
    [loginUser.rejected as any]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      if (payload) {
        if (payload.non_field_errors) {
          state.errorMessage = payload.non_field_errors;
        } else {
          state.errorMessage = payload.email ? payload.email : [];
        }
      }
    },
    [loginUser.pending as any]: (state) => {
      state.isFetching = true;
    },
    [fetchUserMenusBytoken.pending as any]: (state) => {
      state.isFetching = true;
    },
    [fetchUserMenusBytoken.fulfilled as any]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.menus = payload.data.menu_list;
    },
    [fetchUserMenusBytoken.rejected as any]: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state: any) => state.user;

export default userSlice.reducer;
