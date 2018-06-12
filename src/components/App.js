import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core';
//import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import HomeResults from './HomeResults';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
          <Route exact={true} path='/' render={() => (
            <div>
            {[1, 2].map(value => (
              <Button component={Link} to={'/homes/'+value} variant="contained" color="primary">
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

export default App;
