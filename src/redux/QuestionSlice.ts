import { createSlice } from '@reduxjs/toolkit';
import GroupService from './GroupService';
import { questionDefaultValue, sampleQuestionTree, sampleQuestionTree2 } from '../features/FormDesigner/Questions/Constants';
import QuestionService from './QuestionService';

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        // questions: sampleQuestionTree,
        questions: [],
        selectedQuestion: questionDefaultValue,
        showSettingsTab: false,
        multiselection: {
            onGoing: false,
            pathList: []
        }
    },
    reducers: {
        ...GroupService,
        ...QuestionService,
    },
});

export const {
    add,
    rearrange,
    update,
    selectQuestion,
    closeSettingsTab,
    addToMultiSelection,
    stopMultiSelection,
    createGroup,
    updateGroup,
    deleteQuestion,
    deleteGroup,
    setQuestions,
} = questionSlice.actions;

export const userSelector = (state: any) => state.user;

export default questionSlice.reducer;
