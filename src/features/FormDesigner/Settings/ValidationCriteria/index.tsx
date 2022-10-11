
import { Box } from '@material-ui/core';
import Style from './Style';
import RenderValidation from './RenderValidation';
import React from 'react';
import { AUDIO, MULTIPLE_SELECT, PHOTO, SELECT_ONE, VIDEO } from '../../QuesTypes/Constants';
import ManuallyValidation from './ManuallyValidation';

export default function ValidationCriteria(props: any) {
    const classes = Style();

    const onNestedQuestionChange = (value: any, child: any) => {
        const event: any = {
            [child]: value,
            ['bangla']: value,
        }
        props.onChange({ ...props.question, validation: { ...props.question.validation, ...event } });
    }

    const applicableForManual = () => {
        return [SELECT_ONE, MULTIPLE_SELECT, PHOTO, AUDIO, VIDEO].includes(props.question.type);
    }

    return (
        <>
            <Box className={classes.validationBox}>
                {
                    applicableForManual()
                        ? <ManuallyValidation hideCloseBtn {...props} />
                        : <RenderValidation {...props} onChange={onNestedQuestionChange} />
                }
            </Box>
        </>
    )
}