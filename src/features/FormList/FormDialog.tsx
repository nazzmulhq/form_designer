import React from 'react';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form, Input } from 'antd';



const initialValues = {
    form_id_string: '',
    form_title: '',
}

yup.addMethod(yup.string, "noSpace", function (errorMessage) {
    return this.test(`test-card-length`, errorMessage, (value) => {
        const { path, createError }: any = this;
        return (
            (value && value.length === 16) ||
            createError({ path, message: errorMessage })
        );
    });
});

const validationSchema = yup.object({
    form_id_string: yup
        .string()
        .required('Id is required')
        .test("noSpace", "should not contain any space", (value: any) => {
            if (value) return !(value.split('').filter((v: any) => v === ' ').length > 0);
            return false;
        }),
    form_title: yup
        .string()
        .required('Title is required')

});

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function FormDialog(props: any) {
    const [form] = Form.useForm();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            props.create({ ...values, form_json: [] });
            resetForm();
        },
    });

    const onFinish = (values: any) => {
        props.create({ ...values, form_json: [] });
        form.resetFields();
    };

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <DialogTitle id="form-dialog-title">Create Form</DialogTitle>
                <DialogContent>

                    <Form.Item name="form_id_string" label="Form Id" rules={[{ required: true, message: 'Please input Form Id!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="form_title" label="Form Title" rules={[{ required: true, message: 'Please input Form Title!' }]}>
                        <Input />
                    </Form.Item>



                    {/* <TextField
                        error={(formik.touched.form_id_string == true && formik.errors.form_id_string) ? true : false}
                        autoFocus
                        margin="dense"
                        id="form_id_string"
                        name="form_id_string"
                        label="Form Id"
                        type="text"
                        value={formik.values.form_id_string}
                        onChange={formik.handleChange}
                        fullWidth
                        helperText={formik.touched.form_id_string && formik.errors.form_id_string}
                    />
                    <TextField
                        margin="dense"
                        id="form_title"
                        name="form_title"
                        label="Form Title"
                        type="text"
                        value={formik.values.form_title}
                        onChange={formik.handleChange}
                        fullWidth
                        error={(formik.touched.form_title == true && formik.errors.form_title) ? true : false}
                        helperText={formik.touched.form_title && formik.errors.form_title}
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button onClick={props.handleClose} type="primary">
                            Cancel
                        </Button>
                    </Form.Item>
                </DialogActions>
            </Form>
        </Dialog>
    );
}
