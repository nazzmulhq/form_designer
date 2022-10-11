import { Box } from '@material-ui/core';
import React from 'react';
import Style from './Style';
import { GROUP_QUESTION } from '../../QuesTypes/Constants';
import { useSelector } from 'react-redux';
import { deepClone } from '../../../../helpers/utils';
import { skipLogicDefaultValue } from './utils';
import RenderSkipLogic from './RenderSkipLogic';


function getPreviousQuestions(questionArray: any[], len: number): any[] {

    let prevQuestions: any = [];
    for (let i = 0; i < len; i++) {

        if (questionArray[i].type === GROUP_QUESTION)
            prevQuestions = prevQuestions.concat(getPreviousQuestions(questionArray[i].questions, questionArray[i].questions.length));
        else
            prevQuestions.push(questionArray[i]);
    }
    return prevQuestions;
}


export default function SkipLogic(props: any) {
    const classes = Style();
    const questions = useSelector((state: any) => state.question.questions);

    const getQuestions = () => {
        let path = props.question.path;
        path = path.split(',');
        let filteredQuestions: any[] = [];
        const pathLen = path.length;
        console.log('in the getquestions', { questions });
        for (let i = 0; i < pathLen; i++) {

            if (i === 0) filteredQuestions = filteredQuestions.concat(getPreviousQuestions(questions, parseInt(path[i])));
            else filteredQuestions = filteredQuestions.concat(getPreviousQuestions(questions[path[i - 1]].questions, parseInt(path[i])));
        }

        console.log({ filteredQuestions });
        return filteredQuestions;

    }

    const addLogic = () => {
        const ques = deepClone(props.question);
        ques.logicList = [...ques.logicList, skipLogicDefaultValue];
        props.onLogicChange(ques);
    }

    const updateLogic = (index: number, data: any) => {
        console.log(index, data);
        const ques: any = deepClone(props.question);
        ques.logicList.splice(index, 1, data);
        props.onLogicChange(ques);
    }

    const removeLogic = (index: number) => {
        const ques = deepClone(props.question);
        ques.logicList.splice(index, 1);
        props.onLogicChange(ques);
    }

    return (
        <>
            <Box className={classes.skipLogicBox}>
                <RenderSkipLogic
                    logicList={props.question.logicList}
                    questions={getQuestions()}
                    updateLogic={updateLogic}
                    removeLogic={removeLogic}
                    addLogic={addLogic}
                />
            </Box>
        </>

    )
}
