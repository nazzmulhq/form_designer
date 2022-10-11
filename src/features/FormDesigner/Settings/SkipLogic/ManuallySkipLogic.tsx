import { CloseOutlined } from '@ant-design/icons'
import { Box, IconButton } from '@material-ui/core'
import { Form, Input, Typography } from 'antd';
import React from 'react'
import ContactStyle from './Style';

export default function ManuallySkipLogic({ setSkipLogicRender }: any) {
    const classes = ContactStyle();
    return (
        <>
            <Box className={classes.closeOutlinedIcon}>
                <IconButton onClick={() => setSkipLogicRender('')}>
                    <CloseOutlined className={classes.icon} />
                </IconButton>
            </Box>

            <Box className={classes.manualSkipLogic}>
                <Typography.Text className={classes.manualSkipLogicText} >Enter your skip logic code here:</Typography.Text>
                <Input.TextArea autoSize={{ minRows: 6, maxRows: 10 }} onChange={(e: any) => console.log(e)} />
            </Box>
        </>
    )
}
