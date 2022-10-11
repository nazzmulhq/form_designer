import _ from "lodash";
import { GROUP_QUESTION, MULTIPLE_SELECT, SELECT_ONE } from "../QuesTypes/Constants";
import { YES } from "./constants";

export const isValid = (question: any) => {

    console.log('---> question: ', question);

    if (isEmpty(question.name)) return { verdict: false, msg: 'name is empty' };
    if (question.type != GROUP_QUESTION && !checkMandatory(question).verdict) return checkMandatory(question);

    const questionValid: any = { verdict: true, msg: '' };
    switch (question.type) {

        case MULTIPLE_SELECT:
            return isvalidMultipleSelect(question);
        case SELECT_ONE:
            return isvalidSelectOne(question);

    }

    return questionValid;
}

function isEmpty(value: any) {
    if (typeof value === 'string') value = String(value).trim();
    if (value == '' || value === null || value === undefined) return true;
    return false;
}

function isvalidMultipleSelect(question: any) {
    if (isEmpty(question.list_name)) return { verdict: false, msg: 'list name is required' };
    return { verdict: true, msg: '' };
}

function isvalidSelectOne(question: any) {
    if (isEmpty(question.list_name)) return { verdict: false, msg: 'list name is required' };
    return { verdict: true, msg: '' };
}

function checkMandatory(question: any) {
    if (question.mandatory === YES && isEmpty(question.requiredMessage.english)) return { verdict: false, msg: "mandatory 'yes' is selected but didn't provide any error message. " };
    return { verdict: true, msg: '' };
}