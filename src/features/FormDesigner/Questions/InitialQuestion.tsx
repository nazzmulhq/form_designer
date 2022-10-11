import React, { SyntheticEvent, useState } from 'react';
import { Card } from 'antd';
import QuestionAddTool from '../../../components/Poper';
import { questionDefaultValue } from "./Constants";
import { PlusOutlined } from '@ant-design/icons';

export default function InitialQuestion() {

    const [anchor, setAnchor] = useState<any>(null);
    const [anchorVisibility, setAnchorVisibility] = useState<boolean>(false);

    const toggleAnchor = () => setAnchorVisibility(false);

    const openAnchor = (event: SyntheticEvent) => {
        setAnchor(event.currentTarget);
        setAnchorVisibility(true);
    };

    return (
        <Card
            style={{
                width: '100%',
                position: 'relative',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <p> This form is currently empty </p>
                <p> You can add questions, notes, prompts, or other fields by clicking  on the + sign below </p>
            </div>
            <PlusOutlined onClick={openAnchor} />
            <QuestionAddTool
                open={anchorVisibility}
                anchorEL={anchor}
                toggleAnchor={toggleAnchor}
                currentQustion={questionDefaultValue}
            />
        </Card>
    )
}