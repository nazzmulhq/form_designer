import React from 'react';
import { useSelector } from 'react-redux';
import { GROUP_QUESTION } from '../../QuesTypes/Constants';
import GroupOptions from './GroupOptions';
import QuestionOptions from './QuestionOptions';


export default function Options(props: any) {

    const selectedQuestion = useSelector((state: any)=> state.question.selectedQuestion);
    console.log(selectedQuestion);
    return(
        <React.Fragment>
            {selectedQuestion.type === GROUP_QUESTION ? <GroupOptions {...props} /> : <QuestionOptions {...props} />}
        </React.Fragment>
    )
}