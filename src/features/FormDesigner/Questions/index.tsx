import React, { Fragment } from "react";
import QuestionItem from "./QuestionItem";
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Style from './Style';
import { useSelector, useDispatch } from "react-redux";
import { questionDefaultValue } from "./Constants";
import GroupComponent from "../GroupQuestion";
import { closeSettingsTab, rearrange } from "../../../redux/QuestionSlice";
import { GROUP_QUESTION } from "../QuesTypes/Constants";
import { HolderOutlined } from "@ant-design/icons";

const DragHandle = SortableHandle(() => {
    const classes = Style();
    return (
        <HolderOutlined className={classes.dragStyle} />
    );
});

const SortableItem = SortableElement((item: any) => {
    return item.value.type === GROUP_QUESTION ? <GroupComponent value={item.value}> <DragHandle /> </GroupComponent> : <QuestionItem value={item.value} > <DragHandle /> </QuestionItem>
});

const SortableList = SortableContainer(({ items }: any) => {
    const classes = Style();
    return (
        <ul className={classes.questionContainer}>
            {items.map((value: any, index: any) => (
                <SortableItem key={`${index}-${value.type}`} value={{ ...value, path: `${index}` }} index={index} />
            ))}
        </ul>
    );
});

export default function Questions() {

    const questions: any = useSelector((state: any) => state.question.questions);
    const dispatch = useDispatch();

    const onSortEnd = ({ oldIndex, newIndex }: any) => {
        dispatch(closeSettingsTab({}));
        dispatch(rearrange({ oldIndex, newIndex, path: '0' }));
    };

    return (
        <Fragment>
            {questions.length > 0 ? <SortableList items={questions} onSortEnd={onSortEnd} useDragHandle={true} /> : <QuestionItem value={questionDefaultValue} />}
        </Fragment>
    );
}

