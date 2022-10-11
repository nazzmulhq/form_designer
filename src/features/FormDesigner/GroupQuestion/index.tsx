import { Tooltip } from '@material-ui/core';
import React, { SyntheticEvent, } from 'react';
import Style from './Style';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestion, deleteGroup } from '../../../redux/QuestionSlice';

import { Collapse } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import GroupConfig from '../Settings/groupSettings';
const { Panel } = Collapse;

const StyledBlockWrapper = styled.div`
  border: 1px solid #e8e8e8;
  margin-bottom: 10px;
  cursor: move;
`;



export default function GroupComponent(props: any) {
    const classes = Style();
    const dispatch = useDispatch();
    const selectedQuestion = useSelector((state: any) => state.question.selectedQuestion);

    const onEditClick = (e: SyntheticEvent) => {
        e.stopPropagation();
        dispatch(selectQuestion(props.value));
    }

    const onDeleteClick = (e: SyntheticEvent) => {
        e.stopPropagation();
        const result = confirm('Are you sure you want to delete the group ?');
        if (result) dispatch(deleteGroup(props.value));
    }

    const isActive = () => {
        return selectedQuestion.id === props.value.id;
    };

    const actionIcons = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Tooltip title="Delete Group" placement="top" arrow>
                    <DeleteOutlined style={{ fontSize: 16, marginTop: '-40%' }} onClick={onDeleteClick} />
                </Tooltip>
                <Tooltip title="Edit Group" placement="top" arrow>
                    <FormOutlined style={{ fontSize: 15, marginTop: '40%' }} onClick={onEditClick} />
                </Tooltip>
            </div>
        )
    }

    return (
        <StyledBlockWrapper className="block" style={{ border: '0px' }}>
            <Collapse defaultActiveKey={['1']} style={{ backgroundColor: 'white' }}>

                <Panel header={props.value.name} key="1" style={{ backgroundColor: '#f1f5f9' }} extra={actionIcons()}>
                    {isActive() ? <GroupConfig /> : null}
                    {props.children}
                </Panel>
            </Collapse>
        </StyledBlockWrapper >
    );
}