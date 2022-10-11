import { current } from "@reduxjs/toolkit";
import _ from "lodash";
import { questionDefaultValue } from "../features/FormDesigner/Questions/Constants";
import { v4 as uuidv4 } from 'uuid';

/**
 *  Common services that used in both question and group.
 */
export const travelToNode = (questionList: any, path: string) => {
    const indexes = path.split(',');
    for (let i = 0; i < indexes.length - 1; i++)
        questionList = questionList[parseInt(indexes[i])].questions;
    return questionList;
}

export const getNodeIndex = (data: any) => {
    if (data === '') return -1;
    return parseInt(data.split(',').pop());
}


/**
 *  Question Reducers
 */
const add = (state: any, action: any) => {
    const questions = travelToNode(state.questions, action.payload.path);
    const questionIndex = getNodeIndex(action.payload.path);

    /**
     * giving a new path for the newly created question
     */
    const ar: any[] = action.payload.path.split(',');
    ar.pop();
    ar.push(questionIndex + 1);
    action.payload.path = ar.join(',');
    action.payload.id = uuidv4();

    console.log('adding new question: ', questions, action.payload);

    questions.splice(questionIndex + 1, 0, action.payload);
    state.selectedQuestion = action.payload;
    state.showSettingsTab = true;
    return state;
};

const rearrange = (state: any, action: any) => {
    state.questions = _.cloneDeep(action.payload);
    return state;
};

const selectQuestion = (state: any, action: any) => {
    console.log(current(state), action.payload);
    state.selectedQuestion = _.cloneDeep(action.payload);
    state.showSettingsTab = true;
    state.multiselection.onGoing = false;
    state.multiselection.pathList = [];
    return state;
};

const update = (state: any, action: any) => {
    const questions = travelToNode(state.questions, action.payload.path);
    const questionIndex = getNodeIndex(action.payload.path);
    questions.splice(questionIndex, 1, action.payload);
};

const deleteQuestion = (state: any, action: any) => {
    const questions = travelToNode(state.questions, action.payload.path);
    const questionIndex = getNodeIndex(action.payload.path);
    questions.splice(questionIndex, 1);
};

const closeSettingsTab = (state: any, action: any) => {
    state.showSettingsTab = false;
    state.selectedQuestion = questionDefaultValue;
};

const addToMultiSelection = (state: any, action: any) => {
    state.multiselection.onGoing = true;
    state.showSettingsTab = false;
    state.selectedQuestion = questionDefaultValue;
    state.multiselection.pathList.push(action.payload);
};

const stopMultiSelection = (state: any, action: any) => {
    state.multiselection.onGoing = false;
    state.multiselection.pathList = [];
};

const setQuestions = (state: any, action: any) => {
    console.log('in set question action: ', action.payload.questions);
    state.questions = action.payload.questions;
}

export default { add, rearrange, selectQuestion, update, closeSettingsTab, addToMultiSelection, stopMultiSelection, deleteQuestion, setQuestions };
