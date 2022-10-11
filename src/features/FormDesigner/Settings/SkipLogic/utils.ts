export interface SkipLogic {
    questionId: string | number;
    questionName: string;
    condition: ConditionOption;
    value: string;
}

export interface ConditionOption {
    label: string;
    value: string;
    gridSize?: number;
}

export const skipLogicDefaultValue: SkipLogic = {
    questionName: '',
    questionId: new Date().getTime(),
    value: '',
    condition: {
        label: 'Was Answered',
        value: 'was_answered',
    }
}

export const conditions: ConditionOption[] = [
    {
        label: 'Was Answered',
        value: 'was_answered',
        gridSize: 4,
    },
    {
        label: 'Was Not Answered',
        value: 'was_not_answered',
        gridSize: 4,
    },
    {
        label: '(=)',
        value: 'equal',
        gridSize: 2,
    },
    {
        label: 'not(!=)',
        value: 'not_equal',
        gridSize: 2,
    }
];