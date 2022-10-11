import _ from 'lodash';
import { deepClone } from '../helpers/utils';
import { questionDefaultValue } from '../features/FormDesigner/Questions/Constants';
import { GROUP_QUESTION } from '../features/FormDesigner/QuesTypes/Constants';
import { travelToNode, getNodeIndex } from './QuestionService';
import { current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/**
* Multiselection should be perform in a single group or in a same level.
* only then group creation would work perfectly
*/
const createGroup = (state: any, action: any) => {
    const group = deepClone(questionDefaultValue);
    const questions: any[] = travelToNode(state.questions, state.multiselection.pathList[0]);
    const removeIndexes = state.multiselection.pathList.map((data: any) => getNodeIndex(data));
    const groupQuestions = _.pullAt(questions, removeIndexes);

    group.type = GROUP_QUESTION;
    group.questions = groupQuestions;
    group.id = uuidv4();
    questions.splice(0, 0, group);
    state.multiselection.onGoing = false;
    state.multiselection.pathList = [];
    return state;
};

const updateGroup = (state: any, action: any) => {
    const questions = travelToNode(state.questions, action.payload.path);
    const groupIndex = getNodeIndex(action.payload.path);
    questions.splice(groupIndex, 1, action.payload);
};

const deleteGroup = (state: any, action: any) => {
    const questions = travelToNode(state.questions, action.payload.path);
    const groupIndex = getNodeIndex(action.payload.path);
    questions.splice(groupIndex, 1);
};

export default { createGroup, updateGroup, deleteGroup };