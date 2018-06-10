import React, { Component } from 'react';
import './App.css';

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 'Loading...',
      avgDailyUsage: 'Loading...',
      avgDailyTemp: 'Loading...',
      scoreMessage: ''
    };
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score}/>
        <Message text={this.state.scoreMessage}/>
        <Statistic stat={this.state.avgDailyUsage} label='Avg Daily Usage'/>
        <Statistic stat={this.state.avgDailyTemp} label='Avg Daily Temp'/>
        <LineChart/>
      </div>
    );
  }

  componentDidMount() {
    fetch(`${REACT_APP_API_ENDPOINT}/api/1/subscriptions/homescore/1/summary`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          score: result.score,
          scoreMessage: result.score_text,
          avgDailyTemp: result.average_daily_temp,
          avgDailyUsage: result.average_daily_energy_usage
        });
      });
  }
}

class Score extends Component {
  render() {
    return (
      <p>{this.props.score}</p>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
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
