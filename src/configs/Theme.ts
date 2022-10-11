import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      dark: '#06CB90',
      light: '#04F8AF',
    },
    secondary: {
      main: '#999A9A',
      light: '#EEEEEE',
      dark: '#6D6D6D',
    },
    error: {
      main: '#F33123',
    },
    warning: {
      main: '#FF9800',
    },
    //table stripe
    info: {
      dark: '#F5F4F4',
      main: '#FFFFFF',
      light: '#F9F9F9',
    },
    success: {
      main: '#4CA550',
    },
    text: {
      primary: '#666666',
      secondary: '#000000',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#FFF',
      default: '#EEE',
    },
    action: {
      active: '#EEEEEE',
      hover: '#888888',
      hoverOpacity: 0.04,
      selected: '#FFFFFF',
      disabled: '#666666',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      lineHeight: 0.35,
      fontSize: 30,
      color: '#FFFFFF',
    },
    h2: {
      fontWeight: 500,
      fontSize: 20,
      // lineHeight: 0.23,
    },
    h3: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 0.21,
      color: '#FFFFFF',
    },
    h4: {
      fontWeight: 700,
      lineHeight: 0.35,
      fontSize: 26,
      color: '#767676',
    },
    body1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      lineHeight: 1.18,
      fontSize: 16,
    },
    caption: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      lineHeight: 0.18,
      fontSize: 16,
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      lineHeight: 0.18,
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      lineHeight: 0.18,
      fontSize: 16,
    },
  },
  //menu
  overrides: {
    MuiMenuItem: {
      root: {
        paddingTop: 12,
        paddingBottom: 12,
        '&:hover': {
          backgroundColor: '#EEEEEE',
          textDecoration: 'none',
        },
      },
    },
    MuiTypography: {
      root: {
        fontStyle: 'normal',
      },
      body1: {
        fontWeight: 300,
      }
    },
    MuiTableCell: {
      root: {
        fontSize: 16,
        lineHeight: 0.21,
        fontWeight: 400,
        whiteSpace: 'nowrap',
      },
    },
    MuiSelect: {
      icon: {
        fill: '#666666',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#666666',
      },
    },
    MuiButton: {
      root: {
        height: 30,
      },
      label: {
        fontWeight: 400,
        // fontSize: 16,
        // lineHeight: 0.18,
        fontFamily: 'Roboto',
      },
      containedPrimary: {
        color: '#FFFFFF',
      },
    },
    MuiTabs: {
      flexContainer: {
        justifyContent: 'flex-end',
      },
      indicator: {
        backgroundColor: '#FFFFFF',
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: '#777171',
        backgroundColor: '#EFEFEF',
        margin: 10,
        border: 'none',
        '&$selected': { color: '#FFFFFF', backgroundColor: '#44B4DB' },
      },
    },
    MuiTableFooter: {
      root: {
        justifyContent: 'flex-end',
      },
    },
    MuiIconButton: {
      root: {
        color: '#888888',
      },
    },
    MuiPopover: {
      paper: {
        minWidth: '15%',
      },
    },
    MuiFormHelperText: {
      root: {
        fontWeight: 400,
        fontSize: 13,
        marginTop: 6,
      },
    },
  },
});
