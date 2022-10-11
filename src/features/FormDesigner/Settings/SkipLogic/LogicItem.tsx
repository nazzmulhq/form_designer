import { Grid, FormControl, Select, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import Style from './Style';
import _ from "lodash";
import { deepClone } from '../../../../helpers/utils'
import { ConditionOption, conditions } from './utils';
import { SELECT_ONE, MULTIPLE_SELECT } from "../../QuesTypes/Constants";
import { DeleteOutlined } from "@ant-design/icons";

export default function LogicItem(props: any) {
    const classes = Style();

    const getGridSize = (value: string): any => {
        return _.find(conditions, { value })?.gridSize;
    }

    const setCondition = (event: any) => {
        const ob = deepClone(props.logic);
        ob.condition.value = event.target.value;
        props.updateLogic(props.index, ob);
    }

    const setQuestion = (event: any) => {
        const ob = deepClone(props.logic);
        console.log('--- setting question in skip logic ------');
        console.log(props.questions.find((data: any) => data.name == event.target.value));
        ob.questionName = event.target.value;
        ob.question = props.questions.find((data: any) => data.name == event.target.value);
        props.updateLogic(props.index, ob);
    }

    const setValue = (event: any) => {
        const ob = deepClone(props.logic);
        ob.value = event.target.value;
        props.updateLogic(props.index, ob);
    }

    const getQuestionOptions = () => {

        if (props.logic.question && (props.logic.question.type == SELECT_ONE || props.logic.question.type == MULTIPLE_SELECT)) {
            return props.logic.question.options.map((data: any, i: number) => <MenuItem value={data.option} key={i}>{data.option}</MenuItem>)
        }
        else return null;
    }

    const showDropdown = () => {
        return (props.logic.question && (props.logic.question.type == SELECT_ONE || props.logic.question.type == MULTIPLE_SELECT))
    }

    console.log('----------  skip item ----------------');
    console.log(props);

    return (
        <React.Fragment>
            <Grid item xs={6} className={classes.formField}>
                <FormControl className={classes.quesDropdown}>
                    <Select
                        value={props.logic.questionName || ''}
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={setQuestion}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {props.questions.map((data: any, i: number) => <MenuItem value={data.name} key={i}>{data.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={getGridSize(props.logic.condition.value)} className={classes.formField}>
                <FormControl className={classes.quesDropdown}>
                    <Select
                        onChange={setCondition}
                        value={props.logic.condition.value}
                        inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {conditions.map((data: ConditionOption, i: number) => <MenuItem value={data.value} key={i}>{data.label}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            {getGridSize(props.logic.condition.value) === 2 && (<Grid item xs={2} className={classes.formField}>
                {showDropdown() ? (
                    <FormControl className={classes.quesDropdown}>
                        <Select
                            onChange={setValue}
                            value={props.logic.value || ''}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {getQuestionOptions()}
                        </Select>
                    </FormControl>) : (
                    <FormControl className={classes.quesDropdown}>
                        <TextField
                            value={props.logic.value || ''}
                            onChange={setValue}
                        />
                    </FormControl>
                )}
            </Grid>)}
            <Grid item xs={1} className={classes.formField}>
                <DeleteOutlined className={classes.deleteIcon} onClick={() => props.removeLogic(props.index)} />
            </Grid>
        </React.Fragment>
    )
}