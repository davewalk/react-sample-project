import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import 'typeface-roboto';

import './App.css';
import HomeResults from './HomeResults';

const styles = {
  button: {
    margin: 10,
    backgroundColor: '#e6168b',
    color: 'white'
  },
  typography: {
    'margin-top': 40,
    'margin-bottom': 15
  }
};

export default withStyles(styles)(
  class App extends Component {
    render() {
      const { classes } = this.props;

      return (
        <Router>
          <div className="App">
          <Route exact={true} path='/' render={() => (
            <div>
              <Typography color={'primary'} className={classes.typography} align={'center'} variant={'display1'}>Click a home below to view its energy usage score</Typography>
              {[1, 2].map(value => (
                <Button key={'route'+value}className={classes.button} component={Link} to={'/homes/'+value}>
                  Home {value}
                </Button>
              ))}
            </div>
          )}/>
          <Route
            path='/homes/:homeId'
            render={(props) => <HomeResults {...props} />}
          />
          </div>
        </Router>
      );
    }
  }
)
