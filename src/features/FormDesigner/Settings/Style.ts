import { makeStyles, Theme } from '@material-ui/core';

const ContactStyle = makeStyles((theme: Theme) => ({
  formField: {
    textAlign: 'right',
    fontWeight: 300,
    fontSize: 13,
  },
  formInputs: {
    paddingTop: '0px !important',
    width: '100%',
  },
  checkOptions: {
    padding: 5
  },
  radioOption: {
    fontSize: 13,
  },
  inputSize: {
    width: '100%',
  },
  root: {
    flexGrow: 1,
    boxShadow: ' 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.19)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',

  },
  padding: {
    padding: theme.spacing(2),
  },
  demo1: {
    backgroundColor: '#fafafa',
  },
  success: {
    color: 'green',
    textAlign: 'center'
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  quesOptionSection: {
    backgroundColor: 'white',
    marginTop: '1%',
    width: '100%',
  },
  requiredField: {
    color: 'red',
  },
  groupField: { textAlign: "center", width: "100%", marginTop: 20 },
  groupFieldInline: { display: 'flex', justifyContent: "center", alignItems: "center" },
  gapBetweenGroupField: { marginLeft: 10, marginRight: 10 },
  deleteForeverIcon: { color: 'red', marginTop: -25, },
  addIconCenterBtn: { textAlign: "center", width: "100%", },
  addIconCenter: {
    width: '20%', margin: "auto",
  },
  settingsOption: { backgroundColor: 'white', marginLeft: 0, width: '99%' },
  // animation slide in.
  animatedItem: {
    animation: `$myEffect 300ms ${theme.transitions.easing.easeInOut}`
  },
  animatedItemExiting: {
    animation: `$myEffectExit 300ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    // transform: "translateX(200%)"
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)"
    }
  },
  "@keyframes myEffectExit": {
    // "0%": {
    //   opacity: 1,
    //   transform: "translateX(0)"
    // },
    // "100%": {
    //   opacity: 0,
    //   transform: "translateX(200%)"
    // }
  }

}));


export const labelCol = { span: 6, offset: 6 }

export default ContactStyle;
