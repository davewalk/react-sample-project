import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import App from './components/App';
import './index.css';

const theme = createMuiTheme({
  overrides: {
    MuiBotton: {
      root: {
        padding: 20
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'white',
        color: '#343a40'
      }
    },
    MuiTypography: {
      colorPrimary: {
        color: '#343a40'
      }
    }
  }
});

ReactDOM.render(<div>
    <MuiThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <a href="/">My Energy Company</a>
        </Typography>
      </Toolbar>
      </AppBar>
      <App />
    </MuiThemeProvider>
  </div>, document.getElementById('root')
);
