import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Box, IconButton } from '@material-ui/core'
import { Col, Form, Radio, Row, Select, Button, Input } from 'antd'
import React, { useEffect, useLayoutEffect } from 'react'
import ContactStyle from './Style';
import { conditions } from './utils';
import _ from "lodash";
import { MULTIPLE_SELECT, SELECT_ONE } from '../../QuesTypes/Constants';
const { Option } = Select;

export default function ConditionSkipLogic({ questions, logicList, updateLogic, addLogic, removeLogic, setSkipLogicRender }: any) {
    const classes = ContactStyle();

    useLayoutEffect(() => {

        if (logicList.length === 0) {
            addLogic();
        }
    }, []);
    console.log('in skipLogic questions: ', questions, logicList);
    const setCondition = (logic: any, index: any, value: any) => {


        console.log('condition event: ', value);
        const ob = _.cloneDeep(logic);
        ob.condition.value = value;
        updateLogic(index, ob);
    }

    const setQuestion = (logic: any, index: any, value: any) => {
        const ob = _.cloneDeep(logic);
        ob.questionName = value;
        ob.question = questions.find((data: any) => data.name == value);
        updateLogic(index, ob);
    }

    const setValue = (logic: any, index: any, value: any) => {
        const ob = _.cloneDeep(logic);
        ob.value = value;
        updateLogic(index, ob);
    }

    const setComparisonType = (logic: any, index: any, value: any) => {
        const ob = _.cloneDeep(logic);
        ob.comparisonType = value;
        updateLogic(index, ob);
    }

    const getQuestionOptions = (logic: any) => {

        if (logic.question && (logic.question.type == SELECT_ONE || logic.question.type == MULTIPLE_SELECT)) {
            return logic.question.options.map((data: any, i: number) => <Select.Option value={data.option} key={i}>{data.option}</Select.Option>)
        }
        else return null;
    }

    return (
        <>
            <Box className={classes.closeOutlinedIcon}>
                <IconButton onClick={() => setSkipLogicRender('')}>
                    <CloseOutlined className={classes.icon} />
                </IconButton>
            </Box>

            <Box className={classes.conditionSkipLogicText}>
                <p>Use the (+) and (-) buttons below to add and remove conditions</p>
                <p>This question will only be displayed <span>
                    <Select defaultValue={'all'} style={{ width: 64 }} onChange={(v: any) => { console.log(v) }}>
                        <Select.Option value="all">All</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="Yiminghe">yiminghe</Select.Option>
                    </Select>
                </span> of the following conditions are true </p>
            </Box>
            {
                logicList.map((data: any, index: number) => (
                    <React.Fragment key={index}>
                        <Box className={classes.conditionSkipLogicForm}>
                            <IconButton className={classes.minusOutlinedIcon} onClick={(e: any) => removeLogic(index)}>
                                <MinusOutlined className={classes.icon} />
                            </IconButton>

                            <Box margin={3} >
                                <Box className={classes.conditionSkipLogicFields}>
                                    <Row justify='space-between' gutter={12}>
                                        <Col span={8}>
                                            <Form.Item labelAlign='left' labelCol={labelCol} label="Field" rules={[{ required: true }]}>
                                                <Select
                                                    value={data.questionName}
                                                    onChange={(e: any) => setQuestion(data, index, e)}
                                                    allowClear
                                                >
                                                    {
                                                        questions.map((ques: any, index: number) => (
                                                            <Option value={ques.name} key={index}>{ques.name}</Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item labelAlign='left' labelCol={labelCol} label="Condition" rules={[{ required: true }]}>
                                                <Select
                                                    onChange={(e: any) => setCondition(data, index, e)}
                                                    value={data.condition.value}
                                                    allowClear
                                                >
                                                    {
                                                        conditions.map((c: any, index: any) =>
                                                            <Select.Option value={c.value} key={index}>{c.label}</Select.Option>
                                                        )
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item labelAlign='left' labelCol={labelCol} >
                                                <Radio.Group
                                                    onChange={(e: any) => setComparisonType(data, index, e.target.value)}
                                                    value={data.comparisonType || ''}>
                                                    <Radio value={1}>The Field</Radio>
                                                    <Radio value={2}>The Value</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item labelAlign='left' labelCol={labelCol} label="Question" rules={[{ required: true }]}>
                                                <Select
                                                    onChange={(e: any) => setQuestion(data, index, e)}
                                                    value={data.questionName}
                                                    allowClear
                                                >
                                                    {
                                                        questions.map((ques: any, index: number) => (
                                                            <Option value={ques.name} key={index}>{ques.label.english}</Option>
                                                        ))
                                                    }
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item labelAlign='left' labelCol={{ span: 4, offset: 4 }} rules={[{ required: true }]}>

                                                <Input value={data.value} onChange={(e) => setValue(data, index, e.target.value)} />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Box>
                            </Box>
                        </Box>
                        <br />
                    </React.Fragment>
                ))
            }

            <Box style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button type="dashed" icon={<PlusOutlined />} size="large" onClick={(e: any) => addLogic()}>
                    Add Logic
                </Button>
            </Box>
        </>
    )
}
export const labelCol = { span: 8, offset: 2 };
