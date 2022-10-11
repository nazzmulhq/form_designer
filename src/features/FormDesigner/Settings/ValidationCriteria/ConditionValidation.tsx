import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Box, IconButton } from '@material-ui/core'
import { Form, Input, Select } from 'antd'
import React, { useLayoutEffect } from 'react'
import ContactStyle from './Style';

export default function ConditionValidation(props: any) {
    const classes = ContactStyle();


    const { question: { validation } } = props;
    console.log('conditional validation props: ', props, 'validation: ', validation);

    return (
        <>
            <Box className={classes.closeOutlinedIcon}>
                <IconButton onClick={() => props.setValidationRender('')}>
                    <CloseOutlined className={classes.icon} />
                </IconButton>
            </Box>

            <Box className={classes.conditionValidationText}>
                <p>This quistion will be valid only displayed if the following conditions apply </p>
            </Box>
            <Box className={classes.conditionValidationForm}>
                <Box margin={5}>
                    <Box className={classes.conditionValidationFields}>
                        <Form.Item style={{ width: "100%" }} label="The question’s response has to be:" rules={[{ required: true }]}>
                            <Select
                                value={validation.condition}
                                onChange={(e: any) => props.onChange(e, 'condition')}
                                allowClear
                            >
                                <Select.Option value="equal"> = </Select.Option>
                                <Select.Option value="not_equal"> != </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item style={{ width: "100%" }} label="Value" rules={[{ required: true }]}>
                            <Input
                                value={validation.value}
                                onChange={(e: any) => props.onChange(e.target.value, 'value')} />
                        </Form.Item>
                    </Box>
                    <Box className={classes.conditionValidationFields}>
                        <Form.Item style={{ width: "100%" }} label="Error Message:" rules={[{ required: true }]}>
                            <Input
                                value={validation.errorMsg}
                                onChange={(e: any) => props.onChange(e.target.value, 'errorMsg')} />
                        </Form.Item>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
