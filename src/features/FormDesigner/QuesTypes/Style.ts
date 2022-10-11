import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
    card: { 
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
    }
}));

export default ContactStyle;
