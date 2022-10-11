import { PlusOutlined } from '@ant-design/icons'
import { Box, Button } from '@material-ui/core'
import { Form, Input } from 'antd'
import React, { useLayoutEffect } from 'react'
import { Question } from '../../Questions/Constants'
import ConditionValidation from './ConditionValidation'
import ManuallyValidation from './ManuallyValidation'
import Style from './Style';

export default function RenderValidation(props: any) {
    const [validationRender, setValidationRender] = React.useState('');
    const classes = Style();

    useLayoutEffect(() => {
        const { question: { validation, validationCode } } = props;

        console.log(validation, validationCode);
        let state = '';
        if (validationCode !== '') state = '2'
        if (validation.condition !== '') state = '1';
        setValidationRender(state);
    }, []);

    switch (validationRender) {
        case '1':
            return <ConditionValidation setValidationRender={setValidationRender} {...props} />
        case '2':
            return <ManuallyValidation setValidationRender={setValidationRender} {...props} />
        default:
            return (
                <Box className={classes.validation}>
                    <Box className={classes.btnBox}>
                        <Button className={classes.btnBlue} variant="outlined" onClick={() => setValidationRender('1')}>
                            <PlusOutlined /> <span style={{ paddingLeft: 5 }}>Add validation</span>
                        </Button>
                        <br />
                        <br />
                        <Button className={classes.btnOrange} variant="outlined" onClick={() => setValidationRender('2')}>
                            ${ } Manually enter your validation in xls form code
                        </Button>
                        <br />
                        <br />
                        <Form.Item style={{ width: "100%" }} name="errorMessage" label="Error Message:" rules={[{ required: true }]}>
                            <Input onChange={(e: any) => props.onChange({ ...props.question, errorMsg: e.target.value })} />
                        </Form.Item>
                    </Box>
                </Box>

            )
    }
}
