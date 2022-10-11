import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
    formField: {
        fontWeight: 300,
        fontSize: 13,
    },
    skipLogicBox: {
        margin: 20
    },
    formInputs: { paddingTop: '0px !important' },
    checkOptions: {
        padding: 5
    },
    radioOption: {
        fontSize: 13,
    },
    sectionMsg: {
        fontWeight: 400,
        fontSize: 13,
        borderBottom: '2px solid #e9edf0',
        color: '#607d8b'
    },
    quesDropdown: {
        width: '100%',
    },
    deleteIcon: {
        color: 'red',
    },
    skipLogic: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnBox: {
        width: "50%",
        textAlign: "center"
    },
    btnBlue: {
        width: "100%",
        backgroundColor: "#0C67AA",
        color: "#fff",
        "&:hover": {
            opacity: 0.8,
            backgroundColor: "#0C67AA",
        }
    },
    btnOrange: {
        width: "100%",
        backgroundColor: "#DF8704",
        color: "#fff",
        "&:hover": {
            opacity: 0.8,
            backgroundColor: "#DF8704",
        }
    },
    conditionSkipLogicText: {
        textAlign: 'center',
    },
    conditionSkipLogicForm: {
        border: '1px solid lightgray',
        padding: 10,
        position: 'relative',
    },
    conditionSkipLogicFields: {
        // display: 'flex',
        // justifyContent: 'space-between',
        // gap: 10,
        width: '100%',
    },
    closeOutlinedIcon: {
        textAlign: 'right',
        marginRight: -10,
        marginTop: -10,
    },
    plusOutlinedIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    minusOutlinedIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    icon: {
        fontSize: 15,
    },
    manualSkipLogic: {
        width: '80%',
        margin: '0 auto',
    },
    manualSkipLogicText: {
        fontWeight: 400,
        fontSize: 15
    }


}));

export default ContactStyle;
