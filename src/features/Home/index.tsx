
import { TextField } from '@material-ui/core';
import React from 'react';
import Wrapper from '../../components/Wrapper';

export default function Home() {
    return (
        <Wrapper>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </Wrapper>
    )
}