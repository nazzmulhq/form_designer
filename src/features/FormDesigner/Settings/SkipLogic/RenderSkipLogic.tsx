import { PlusOutlined } from '@ant-design/icons'
import { Box, Button } from '@material-ui/core'
import React, { useLayoutEffect } from 'react'
import ConditionSkipLogic from './ConditionSkipLogic'
import ManuallySkipLogic from './ManuallySkipLogic'
import Style from './Style';

export default function RenderSkipLogic(props: any) {
    const [skipLogicRender, setSkipLogicRender] = React.useState('');
    const classes = Style();

    useLayoutEffect(() => {
        if (props.logicList.length > 0) {
            setSkipLogicRender('1');
        }
    }, []);
    switch (skipLogicRender) {
        case '1':
            return <ConditionSkipLogic {...props} setSkipLogicRender={setSkipLogicRender} />
        case '2':
            return <ManuallySkipLogic {...props} />
        default:
            return (
                <Box className={classes.skipLogic}>
                    <Box className={classes.btnBox}>
                        <Button className={classes.btnBlue} variant="outlined" onClick={() => setSkipLogicRender('1')}>
                            <PlusOutlined /> <span style={{ paddingLeft: 5 }}>Add condition</span>
                        </Button>
                        <br />
                        <br />
                        <Button className={classes.btnOrange} variant="outlined" onClick={() => setSkipLogicRender('2')}>
                            ${ } Manually enter your skip logic in xls form code
                        </Button>
                    </Box>
                </Box>

            )
    }
}
