import React, { useEffect, useState } from 'react';
import QuestionOption from './Options';
import { Grid } from '@material-ui/core';
import SkipLogic from './SkipLogic';
import ValidationCriteria from './ValidationCriteria';
import { useDispatch, useSelector } from 'react-redux';
import { closeSettingsTab, update } from '../../../redux/QuestionSlice';
import Style from './Style';
import { isValid } from './settingsService';
import { Tabs } from 'antd';
import Rating from './Options/Rating';
import { CHOICE_OPTION, getQuesConfigByType, QUESTION_OPTION, RATING_OPTION, SKIP_LOGIC, VALIDATION_CRITERIA } from './constants';
import Choice from './Options/Choice';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function QuestionConfig() {
    const dispatch = useDispatch();
    const showSettingsTab = useSelector((state: any) => state.question.showSettingsTab);
    const classes = Style();
    const selectedQuestion = useSelector((state: any) => state.question.selectedQuestion);
    const [previousQuestion, setPreviousQuestion] = useState<any>(null);
    const [msg, setMsg] = useState<any>({ severity: 'success', txt: '', show: false });
    const [question, setQuestion] = useState<any>(selectedQuestion);

    /**
     * ------------------------------------------------------------------------------------------------------------------------
     * ----these 2 condition will apply if user forget to click the save button to save the configurtation.--------------------
     */
    /** condition 1 */
    if (previousQuestion !== null
        && question.type !== ''
        && selectedQuestion.type !== ''
        && previousQuestion.path !== selectedQuestion.path) {

        setPreviousQuestion(selectedQuestion);
        dispatch(update(question));
    }

    /** condition 2 */
    if (previousQuestion === null && selectedQuestion.type !== '') {
        setPreviousQuestion(selectedQuestion);
    }
    /**
     * ------------------------------------------------------------------------------------------------------------------------
     * ------------------------------------------------------------------------------------------------------------------------
     */

    useEffect(() => {
        setQuestion(selectedQuestion);
    }, [selectedQuestion]);

    const showMsg = () => {
        setMsg({ severity: 'success', show: true, txt: 'Saved Successfully' });
        setTimeout(() => {
            setMsg({ ...msg, show: false, txt: '' });
            dispatch(closeSettingsTab({}));
        }, 2000);
    }

    const showErrMsg = (txt: string) => {
        setMsg({ severity: 'error', show: true, txt, });
        setTimeout(() => {
            setMsg({ ...msg, show: false, txt: '' });
        }, 2000);
    }

    const updateQuestion = () => {
        const valid: any = isValid(question);
        console.log('update question validation: ', valid);
        if (valid.verdict) {
            dispatch(update(question));
            setPreviousQuestion(null);
            showMsg();
        } else {
            showErrMsg(valid.msg);
        }

    }

    const cancel = () => dispatch(closeSettingsTab({}));


    const configuration = (config: any) => {
        switch (config) {

            case QUESTION_OPTION:
                return <QuestionOption question={question} onChange={(ques: any) => setQuestion(ques)} />;

            case SKIP_LOGIC:
                return <SkipLogic question={question} onLogicChange={(ques: any) => setQuestion(ques)} />;

            case VALIDATION_CRITERIA:
                return <ValidationCriteria question={question} onChange={(ques: any) => setQuestion(ques)} />;

            case RATING_OPTION:
                return <Rating question={question} onSettingsChange={(ques: any) => setQuestion(ques)} />;

            case CHOICE_OPTION:
                return <Choice question={question} onChange={(ques: any) => setQuestion(ques)} />
            default:
                return null;
        }
    }

    const questionConfigs = () => {
        return getQuesConfigByType(question.type).map((name: any) => ({
            name,
            element: configuration(name),
        }));
    }

    return (
        <> {!showSettingsTab ? null : (
            <>
                <Tabs
                    tabPosition="left"
                    items={questionConfigs().map((elm: any, i: any) => {
                        const id = String(i + 1);
                        return {
                            label: elm.name,
                            key: id,
                            children: elm.element,
                        };
                    })}
                    style={{ backgroundColor: 'white' }}
                />
                <Grid item xs={12}>{msg.show && <p className={msg.severity === 'success' ? classes.success : classes.error}>{msg.txt}</p>}</Grid>
                <Grid container justifyContent="center" style={{ padding: 30 }}>
                    <Button icon={<CloseOutlined />} danger onClick={cancel} style={{ marginRight: 20 }}> Cancel</Button>
                    <Button icon={<SaveOutlined />} type="primary" onClick={updateQuestion}> Submit</Button>
                </Grid>
            </>
        )}
        </>
    );
}
