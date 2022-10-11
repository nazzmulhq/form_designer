import { CloseOutlined } from '@ant-design/icons'
import { Box, IconButton } from '@material-ui/core'
import { Form, Input, Typography } from 'antd';
import React from 'react'
import ContactStyle from './Style';

export default function ManuallyValidation({ setValidationRender, hideCloseBtn }: any) {
    const classes = ContactStyle();
    return (
        <>
            <Box className={classes.closeOutlinedIcon}>
                {
                    hideCloseBtn ? null : (
                        <IconButton onClick={() => setValidationRender('')}>
                            <CloseOutlined className={classes.icon} />
                        </IconButton>
                    )
                }
            </Box>
            <Box className={classes.manualValidation}>
                <Typography.Text className={classes.manualValidationText} >Enter your validation code here:</Typography.Text>
                <Input.TextArea autoSize={{ minRows: 6, maxRows: 10 }} onChange={(e: any) => console.log(e)} />
            </Box>
        </>
    )
}
