import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
    groupSection: { 
        width: '96%',
        paddingBottom: '2%',
        marginLeft: '2%',
    },
    groupTextColor: {
        color: '#039be5'
    },
    questionContainer: {
        width: '100%',
        padding: 0,
        paddingRight: '3%',
    },
    accordionSummary: {
        backgroundColor: '#eceff1',
    },
    innerSummary: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%'
    },
    groupIcons: {
        fontSize: '1.2rem',
    },
    iconSection: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '7%'
    },
}));

export default ContactStyle;
