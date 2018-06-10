import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Score/>
        <Message/>
        <ScoreStatistics/>
        <LineChart/>
      </div>
    );
  }
}

class Score extends Component {
  render() {
    return (
      <p>85</p>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <p>Your Home Score is an 87 - congrats! The higher the score, the more efficient we measure your home to be against homes like yours.</p>
    );
  }
}

class ScoreStatistics extends Component {
  render() {
    return (
      <div>
        <Statistic stat='75' label='Avg Daily Usage'/>
        <Statistic stat='45&#176;' label='Avg Daily Temp'/>
      </div>
    );
  }
}

class Statistic extends Component {
  render() {
    return (
      <div>
        {this.props.stat}<br />
        {this.props.label}
      </div>
    );
  }
}

class LineChart extends Component {
  render() {
    return (
      <p>Line chart will go here</p>
    );
  }
}

export default App;
