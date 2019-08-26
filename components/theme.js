import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Raleway, "Helvetica", "Arial", sans-serif'
  },
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#fff' //'#19857b',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#FFF'
      }
    }
  }
});

export default theme;
