import React from 'react';
import {Checkbox, Grid } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import Style from '../Style';

export default function GroupOptions(props: any) {
    const classes = Style();

    const onQuestionChange=(e: any)=>{
        props.onChange({...props.question, [e.target.name]: e.target.value});
    }

    return (
        <Grid container spacing={2} className={classes.settingsOption} >
            <Grid item xs={4} className={classes.formField}>
                Name :
            </Grid>
            <Grid item xs={7} className={classes.formInputs}>
                <Input 
                    name="name" 
                    value={props.question.name}
                    className={classes.inputSize} 
                    onChange={onQuestionChange}
                />
            </Grid>
            <Grid item xs={4} className={classes.formField}>
                Data Column Name :
            </Grid>
            <Grid item xs={7} className={classes.formInputs}>
                <Input 
                    name="dataColumnName" 
                    value={props.question.dataColumnName}
                    className={classes.inputSize} 
                    onChange={onQuestionChange}
                />
            </Grid>
            <Grid item xs={4} className={classes.formField}>
                Appearance (Advanced) :
            </Grid>
            <Grid item xs={8} className={classes.formInputs}>
                <Checkbox
                    name="groupAppearance"
                    checked={props.question.groupAppearance}
                    onChange={()=> props.onChange({...props.question, groupAppearance: !props.question.groupAppearance})}
                />
            </Grid>
            <Grid item xs={4} className={classes.formField}>
                Repeat :
            </Grid>
            <Grid item xs={8} className={classes.formInputs}>
                <Checkbox
                    name="repeat"
                    checked={props.question.repeat}
                    onChange={()=> props.onChange({...props.question, repeat: !props.question.repeat})}
                />
            </Grid>
        </Grid>
    );
}