import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes'


const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      //light: '#a4c74c',
      main: '#a4c74c',
      //dark: '#be9756',
      contrastText: '#5b5c5e' //'#8a3f46'
    },
    secondary: {
      light: '#676d58',
      main: '#253659',
      dark: '#5d5c5e',
      contrastText: '#edefe3',
    },
    // error: will use the default color
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    useNextVariants: true,
    fontFamily: [
      'Roboto',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
