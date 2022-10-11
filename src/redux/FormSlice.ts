import { createSlice } from '@reduxjs/toolkit';
import FormService from './FormService';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        formName: '',
        formTitle: '',
    },
    reducers: {
        ...FormService,
    },
});

export const {
    setForm,
    setLayoutSettings,
} = formSlice.actions;

export default formSlice.reducer;
