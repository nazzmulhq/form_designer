import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import questionSlice from './QuestionSlice';
import formSlice from './FormSlice';
import userSlice from '../features/User/UserSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    question: questionSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
