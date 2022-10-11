import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
    formField: {
        textAlign: 'right',
        fontWeight: 300,
        fontSize: 13,
    },
    formInputs: { paddingTop: '0px !important' },
    formcontrol: {
        width: '100%'
    },
    checkOptions: {
        padding: 5
    },
    radioOption: {
        fontSize: 13,
    },
    validation: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    validationBox: {
        margin: 20
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
    conditionValidationText: {
        textAlign: 'center',
    },
    conditionValidationForm: {
        border: '1px solid lightgray',
        padding: 10,
        position: 'relative',
    },
    conditionValidationFields: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
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
    manualValidation: {
        width: '80%',
        margin: '0 auto',
    },
    manualValidationText: {
        fontWeight: 400,
        fontSize: 15
    }

}));

export default ContactStyle;
