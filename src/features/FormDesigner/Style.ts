import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
    questionListSection: {
        backgroundColor: '#fafafa',
    },
    toolSection: {
        top: 0,
        position: 'sticky',
        backgroundColor: 'white',
        zIndex: 1,
        boxShadow: 'rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px',
        border: '1px solid lightgrey',
        display: 'flex',
        justifyContent: 'space-between',
    },
    rightSideButtons: {
        marginLeft: '12px'
    },
    container: {
        padding: 30,
        position: 'relative',
        width: '99%',
    },
    projectTitle: {
        color: '#607d8b',
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'left'
    },
    columns: {

    },
    table: {

        "& .ant-table-thead .ant-table-cell": {
            padding: '0px 0px',
        },
        "& .ant-table-thead .ant-table-cell:first-child": {
            backgroundColor: 'transparent',
            border: 'none',
        },
        "& .ant-table-tbody .ant-table-cell": {
            borderTop: '1px solid lightgrey !important',
            borderButton: '1px solid lightgrey !important',
            borderRight: '1px solid lightgrey !important',
        },
        "& .ant-table-tbody .ant-table-cell:first-child": {
            borderLeft: '1px solid lightgrey !important',
        },
    },
    deleteIconPosition: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        cursor: 'pointer'
    },
    deleteIcon: {
        color: 'red',
    },
    addIconPosition: {
        position: 'absolute',
        top: '7px',
        right: '-12px',
        cursor: 'pointer',
        backgroundColor: '#fafafa',
        borderTop: '1px solid #f0f0f0',
        borderRight: '1px solid #f0f0f0',
        borderBottom: '1px solid #f0f0f0',
        borderTopRightRadius: '25%',
        borderBottomRightRadius: '25%',
        padding: '7px 10px',
        "&:hover": {
            backgroundColor: 'lightgrey',
        }
    },
    addRowIconPosition: {
        position: 'absolute',
        bottom: '-40px',
        left: '0px',
        cursor: 'pointer',
        backgroundColor: '#fafafa',
        width: '15%',
        textAlign: 'center',
        padding: '7px 10px',
        "&:hover": {
            backgroundColor: 'lightgrey',
        }
    },



    input: {
        outline: 'hidden',
        border: '1px solid transparent',
        padding: "0px 10px",
        width: '100%',
        backgroundColor: 'transparent',
        "&:focus": {
            border: '1px solid lightgray',
            backgroundColor: 'white',
        }
    }

}));

export default ContactStyle;
