import React from 'react';
import {
    Button,
    Checkbox,
    Col,
    Form,
    Row,
    Select,
    Switch,
    Typography,
    Input,
} from 'antd';
import { formStyles, metaDataList } from './constant';
import { useDispatch } from 'react-redux';
import { setLayoutSettings } from '../../redux/FormSlice';
import { SaveOutlined, CloseOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Title } = Typography;
const titleColor = { color: 'gray', marginBottom: '.5em' }


const LayoutSettings = ({ close }: any) => {

    const dispatch = useDispatch();
    const onFinish = (values: any) => {
        dispatch(setLayoutSettings(values));
        console.log('Received values of form: ', JSON.stringify(values));
    };

    return (
        <Form
            name="validate_other"
            layout="vertical"
            onFinish={onFinish}
        >
            <Title level={3} style={{ color: 'gray', marginBottom: '0px' }}>Form Style</Title>
            <p style={{ color: 'darkgray' }}>Select the form style that you would like to use, this will only effect the web forms</p>
            <Form.Item
                name="formStyle"
                rules={[
                    {
                        required: true,
                        message: 'Please select form style!',
                    },
                ]}
            >
                <Select placeholder="Please select a form style">
                    {formStyles.map((fs: any, i: number) => (
                        <Option value={fs.value} key={i}>{fs.label}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Title level={3} style={{ color: 'gray', marginBottom: '0px' }}>Meta Data</Title>
            <Form.Item name="metaData" >
                <Checkbox.Group>
                    <Row>
                        {metaDataList.map((meta: any, index: any) => (
                            <Col span={8} key={index}>
                                <Checkbox
                                    value={meta}
                                    style={{
                                        lineHeight: '32px',
                                    }}
                                >
                                    {meta}
                                </Checkbox>
                            </Col>
                        ))}
                    </Row>
                </Checkbox.Group>
            </Form.Item>
            <p style={titleColor}>Description</p>
            <Form.Item name="description">
                <Input type="text" />
            </Form.Item>

            <p style={{ color: 'darkgray', }}>Please specify the country and the sector where this project will be deployed </p>
            <p style={titleColor}>Country</p>
            <Form.Item
                name="country">
                <Select placeholder="Please select a country">
                    <Option value="bangladesh">Bangladesh</Option>
                </Select>
            </Form.Item>

            <p style={titleColor}> Sector</p>
            <Form.Item
                name="sector">
                <Select placeholder="Please select a country">
                    <Option value="finance">Finance</Option>
                    <Option value="health">Health</Option>
                    <Option value="construction">Construction</Option>
                </Select>
            </Form.Item>

            <Form.Item name="help_mpower" valuePropName="checked">
                <Switch />
            </Form.Item>
            <p style={{ color: 'darkgray' }}>Help mpower improve this product by sharing the sector and country where this project will be deployed </p>
            <Form.Item
                wrapperCol={{
                    span: 12,
                    offset: 0,
                }}
            >
                <span style={{ marginRight: 10 }}>
                    <Button icon={<CloseOutlined />} danger onClick={close} > Cancel</Button>
                </span>
                <Button type="primary" icon={<SaveOutlined />} htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LayoutSettings;