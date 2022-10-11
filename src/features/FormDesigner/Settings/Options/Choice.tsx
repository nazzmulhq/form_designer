import { Form, Input, Button } from 'antd';
import Style from '../Style';
import _ from 'lodash';
import React from 'react';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

export default function Choice(props: any) {

    const classes = Style();

    const optionValueChange = (index: number, e: any) => {
        const tempOptions = _.cloneDeep(props.question.options);
        let opt = tempOptions[index];
        opt = { ...opt, [e.target.name]: e.target.value };
        tempOptions[index] = opt;
        console.log({ tempOptions });
        props.onChange({ ...props.question, options: tempOptions });
    }

    const addOption = () => {
        const opt = _.cloneDeep(props.question.options);
        opt.push({ option: '', value: '' });
        props.onChange({ ...props.question, options: opt });
    }

    const removeOption = (index: any) => {
        const opt = _.cloneDeep(props.question.options);
        opt.splice(index, 1);
        props.onChange({ ...props.question, options: opt });
    }

    return (
        <>
            <div className={classes.groupField}>
                {props.question.options && props.question.options.map((data: any, i: number) => {
                    return (
                        <div className={classes.groupFieldInline} key={i}>

                            <Form.Item label="Option:" rules={[{ required: true }]}>
                                <Input name="option" value={data.option} onChange={(e: any) => optionValueChange(i, e)} />
                            </Form.Item>
                            <Form.Item className={classes.gapBetweenGroupField} label="Value:" rules={[{ required: true }]}>
                                <Input name="value" value={data.value} onChange={(e: any) => optionValueChange(i, e)} />
                            </Form.Item>
                            <DeleteOutlined className={classes.deleteForeverIcon} onClick={() => removeOption(i)} />
                        </div>
                    )
                })}
            </div>
            <div className={classes.addIconCenterBtn}>
                {props.question.options && (
                    <Button
                        type="dashed"
                        className={classes.addIconCenter}
                        onClick={addOption}>
                        <PlusOutlined /> Click to add another response
                    </Button>
                )}
            </div>
        </>
    )
}