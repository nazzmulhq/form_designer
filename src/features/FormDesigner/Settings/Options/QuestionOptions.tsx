import React from 'react';
import Style from '../Style';
import { Row } from 'antd';
import {
    NameElement,
    LabelElement,
    CalculationElement,
    GuidenceHintElement,
    MandatoryResponse,
    DefaultResponse,
    Appearance,
    HXLElement,
    Parameters,
    SeedElement,
    ListName,
    AcceptedFileElement,
    KoboScoreChoices
} from './QuesOptFields';

export default function QuestionOptions(props: any) {
    const classes = Style();

    const onQuestionChange = (e: any) => {
        props.onChange({ ...props.question, [e.target.name]: e.target.value });
    }

    const onQuestionSelect = (name: any, value: any) => {
        props.onChange({ ...props.question, [name]: value });
    }

    const onNestedQuestionChange = (e: any, parent: any, child: any) => {
        props.onChange({ ...props.question, [parent]: { [child]: e.target.value, ['bangla']: e.target.value } });
    }

    return (
        <>
            <div className={classes.quesOptionSection}>
                <Row justify='start'>

                    <NameElement
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <LabelElement
                        question={props.question}
                        onNestedQuestionChange={onNestedQuestionChange} />

                    <CalculationElement
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <GuidenceHintElement
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <MandatoryResponse
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <DefaultResponse
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <Appearance
                        question={props.question}
                        onQuestionSelect={onQuestionSelect} />

                    <HXLElement
                        question={props.question}
                        onQuestionChange={onQuestionChange}
                        onQuestionSelect={onQuestionSelect} />

                    <Parameters
                        question={props.question}
                        onChange={props.onChange} />

                    <SeedElement
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <ListName
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <AcceptedFileElement
                        question={props.question}
                        onQuestionChange={onQuestionChange} />

                    <KoboScoreChoices
                        question={props.question}
                        onQuestionChange={onQuestionChange} />
                </Row>
            </div>
        </>

    );
}