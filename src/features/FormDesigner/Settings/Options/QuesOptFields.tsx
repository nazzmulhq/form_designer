import React from 'react';
import { Checkbox } from "@material-ui/core";
import Style, { labelCol } from '../Style';
import { AUDIO, CALCULATE, DATE, DATE_TIME, DECIMAL, FILE, MULTIPLE_SELECT, NOTE, NUMBER, PHOTO, RATING, SELECT_ONE, TEXT, TIME, VIDEO } from '../../QuesTypes/Constants';
import { Col, Form, Input, Radio, Row, Select } from 'antd';
import { YES, NO, CUSTOM_LOGIC, appearanceOptions, hxlTags } from '../constants';

export const NameElement = ({ question, onQuestionChange }: any) => {
    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Data column name:" rules={[{ required: true }]}>
                <Input name="name" value={question.name} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null
}

export const KoboScoreChoices = ({ question, onQuestionChange }: any) => {
    const applicableQuestions: any = [RATING];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Kobo Score Choices:" rules={[{ required: true }]}>
                <Input name="koboScoreChoices" value={question.koboScoreChoices} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null
}

export const AcceptedFileElement = ({ question, onQuestionChange }: any) => {
    const applicableQuestions: any = [FILE];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Accepted Files:" rules={[{ required: true }]}>
                <Input name="acceptedFile" value={question.acceptedFile} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null
}

export const LabelElement = ({ question, onNestedQuestionChange }: any) => {
    const notApplicableQuestions = [CALCULATE];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Label:" rules={[{ required: true }]}>
                <Input value={question.label.english} onChange={(e) => onNestedQuestionChange(e, 'label', 'english')} />
            </Form.Item>
        </Col>
    ) : null
}

export const CalculationElement = ({ question, onQuestionChange }: any) => {
    const applicableQuestions = [CALCULATE];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Calculation:" rules={[{ required: true }]}>
                <Input name="calculation" onChange={onQuestionChange} value={question.calculation} />
            </Form.Item>
        </Col>
    ) : null
}

export const GuidenceHintElement = ({ question, onQuestionChange }: any) => {

    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Guidance Hint:" rules={[{ required: true }]}>
                <Input name="hint" value={question.hint} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null;
}

export const MandatoryResponse = ({ question, onQuestionChange }: any) => {
    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Mandatory Response:" rules={[{ required: true }]}>
                <Radio.Group name="mandatory" onChange={onQuestionChange} value={question.mandatory}>
                    <Radio value={YES}>Yes</Radio>
                    <Radio value={NO}>No</Radio>
                    <Radio value={CUSTOM_LOGIC}>Custom Logic</Radio>
                </Radio.Group>
            </Form.Item>
        </Col>
    ) : null;
}

export const DefaultResponse = ({ question, onQuestionChange }: any) => {
    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Default Response:" rules={[{ required: true }]}>
                <Input name="defaultResponse" value={question.defaultResponse} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null;
}

export const Appearance = ({ question, onQuestionSelect }: any) => {
    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Appearance" rules={[{ required: true }]}>
                <Select
                    value={question.appearance}
                    onChange={(value) => onQuestionSelect('appearance', value)}
                    allowClear
                >
                    {appearanceOptions.map((data: any, i: any) => <Select.Option key={i} value={data}> {data}</Select.Option>)}
                </Select>
            </Form.Item>
        </Col>
    ) : null;
}

export const HXLElement = ({ question, onQuestionChange, onQuestionSelect }: any) => {
    const notApplicableQuestions: any = [];
    const found = notApplicableQuestions.find((type: any) => type == question.type);

    const selectBefore = (
        <Select
            defaultValue="#tags"
            className="select-before"
            onChange={(value: any) => onQuestionSelect('tags', value)}>
            {hxlTags.map((hxl: any, index: any) => (
                <Select.Option value={hxl} key={index}>{`#${hxl}`} </Select.Option>
            ))}
        </Select>
    );
    return !found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="HXL:" rules={[{ required: true }]}>
                <Input addonBefore={selectBefore} name="tagValue" onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null;
}

export const Parameters = ({ question, onChange }: any) => {
    const applicableQuestions: any = [SELECT_ONE, MULTIPLE_SELECT, PHOTO];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Parameters:" rules={[{ required: true }]}>
                <Checkbox
                    name="parameters"
                    checked={question.parameters}
                    onChange={() => onChange({ ...question, parameters: !question.parameters })} />
            </Form.Item>
        </Col>
    ) : null;
}

export const SeedElement = ({ question, onQuestionChange }: any) => {
    const applicableQuestions: any = [SELECT_ONE, MULTIPLE_SELECT];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="Seed:" rules={[{ required: true }]}>
                <Input name="seed" value={question.seed} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null;
}

export const ListName = ({ question, onQuestionChange }: any) => {
    const applicableQuestions = [SELECT_ONE, MULTIPLE_SELECT];
    const found = applicableQuestions.find((type: any) => type == question.type);
    return found ? (
        <Col span={20}>
            <Form.Item labelAlign='left' labelCol={labelCol} label="List Name:" rules={[{ required: true }]}>
                <Input name="list_name" value={question.list_name} onChange={onQuestionChange} />
            </Form.Item>
        </Col>
    ) : null;
}
