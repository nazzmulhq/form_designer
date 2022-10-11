import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Questions from './Questions';
import QuestionSettings from './Settings';
import Style from './Style';
import { useDispatch, useSelector } from "react-redux";
import { createGroup, setQuestions } from "../../redux/QuestionSlice";
import { useHistory } from "react-router";
import axios from "axios";
import { UPDATE_FORM } from '../../configs/ServerUrl';
import { FileTextOutlined, LeftOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";


export default function FormDesigner(props: any) {
    const classes = Style();
    const multiselection = useSelector((state: any) => state.question.multiselection);
    const questions = useSelector((state: any) => state.question.questions)
    const dispatch = useDispatch();
    const history = useHistory();
    const [formDetails, setFormDetails] = useState<any>({});

    const _createGroup = () => {
        dispatch(createGroup({}));
    }

    const saveAsDraft = async () => {
        console.log("updaring form ", questions);
        // const notification = Notification('hello notification');
        const url = UPDATE_FORM.replace('__username__', props.location.state.username);
        try {
            const response = await axios.post(url, { ...formDetails, form_json: questions });
            if (response.data.status == 200)
                console.log(response);
        } catch (ex: any) {
            alert(ex.toString());
        }
    }

    useEffect(() => {
        // dispatch(setQuestions({ questions: [...props.location.state.form.form_json] }));
        // setFormDetails({ ...props.location.state.form });
    }, []);

    return (
        <Grid container className={classes.container} spacing={2}>
            <Grid item xs={12} className={classes.projectTitle}> <FileTextOutlined /> <span style={{ paddingTop: '0.2%' }}>{formDetails.form_title}</span> </Grid>
            <Grid item xs={12} className={classes.toolSection}>
                <Button color="primary" variant="outlined" disabled={!multiselection.onGoing} onClick={_createGroup}>
                    <PlusOutlined />
                    Create Group
                </Button>

                <div>
                    <Button color="primary" variant="outlined" onClick={saveAsDraft} className={classes.rightSideButtons}>

                        <SaveOutlined />
                        save as draft
                    </Button>
                    <Button color="primary" variant="outlined" onClick={() => history.goBack()} style={{ border: '1px solid #4caf50', marginLeft: '5px' }}>
                        <LeftOutlined /> Back
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} md={7} className={classes.questionListSection}>
                <Questions />
            </Grid>
            <Grid item xs={12} md={5}>
                <QuestionSettings />
            </Grid>
        </Grid>
    );
}

