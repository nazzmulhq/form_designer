export const YES = 'yes';
export const NO = 'no';
export const CUSTOM_LOGIC = 'custom_logic';
export const QUESTION_OPTION = 'Question Option';
export const SKIP_LOGIC = 'Skip Logic';
export const VALIDATION_CRITERIA = 'Validation Criteria';
export const RATING_OPTION = 'Rating Option';
export const CHOICE_OPTION = 'Choice';
export const appearanceOptions = ['minimal', 'quick', 'horizontal-compact', 'horizontal', 'likert', 'compact', 'quickcompact', 'label', 'list-nolabel', 'other'];
export const hxlTags = ['capacity', 'activity', 'adm1', 'adm2', 'adm3', 'adm4', 'adm5', 'affected', 'benificiary', 'cause', 'country', 'crisis', 'date', 'description', 'geo', 'impact', 'inneed', 'loc', 'meta', 'operations', 'org', 'output', 'population', 'reached', 'region', 'sector', 'severity', 'subsector'];

import {
    ACKNOWLEDGE,
    AREA,
    AUDIO,
    CALCULATE,
    DATE,
    DATE_TIME,
    DECIMAL,
    MULTIPLE_SELECT,
    PHOTO,
    SELECT_ONE,
    TEXT,
    BARCODE,
    NUMBER,
    FILE,
    NOTE,
    POINT,
    QUESTION_MATRIX,
    RANGE,
    RANKING,
    TIME,
    VIDEO,
    RATING
} from "../QuesTypes/Constants";

export const getQuesConfigByType = (type: any): string[] => {

    switch (type) {

        case TEXT:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case DECIMAL:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case DATE:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case DATE_TIME:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case TIME:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case CALCULATE:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case RATING:
            return [RATING_OPTION, QUESTION_OPTION, SKIP_LOGIC];

        case NOTE:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case SELECT_ONE:
            return [QUESTION_OPTION, CHOICE_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case MULTIPLE_SELECT:
            return [QUESTION_OPTION, CHOICE_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case PHOTO:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case FILE:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        case POINT:
            return [QUESTION_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA];

        default:
            return [QUESTION_OPTION];
    }

}
export default {};