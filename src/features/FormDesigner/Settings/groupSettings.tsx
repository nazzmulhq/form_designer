import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import SkipLogic from './SkipLogic';
import { useDispatch, useSelector } from 'react-redux';
import { closeSettingsTab, update } from '../../../redux/QuestionSlice';
import Style from './Style';
import { isValid } from './settingsService';
import { Tabs } from 'antd';
import GroupOptions from './Options/GroupOptions';
import { Button } from 'antd';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';

export default function GroupConfig() {
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

    const questionConfigs = () => ([{
        name: 'Options',
        element: <GroupOptions question={question} onChange={(ques: any) => setQuestion(ques)} />,
    },
    {
        name: 'Skip Logic',
        element: <SkipLogic question={question} onLogicChange={(ques: any) => setQuestion(ques)} />,
    }
    ]);

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
                    <Button icon={<CloseOutlined />} danger color="default" onClick={cancel} style={{ marginRight: 20 }}> Cancel</Button>
                    <Button icon={<SaveOutlined />} type="primary" onClick={updateQuestion}> Submit</Button>
                </Grid>
            </>
        )}
        </>
    );
}
