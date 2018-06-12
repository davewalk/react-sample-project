import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import { Line as LineChart } from 'react-chartjs';
import { Typography, Button, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

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

class HomeResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 'Loading...',
      avgDailyUsage: 'Loading...',
      avgDailyTemp: 'Loading...',
      scoreMessage: ''
    };
  }

 componentDidMount() {
   const homeId = this.props.match.params.homeId;
    fetch(`${REACT_APP_API_ENDPOINT}/api/1/subscriptions/homescore/${homeId}/summary`)
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

 render() {
   return (
    <div>
      <Score score={this.state.score}/>
      <Message text={this.state.scoreMessage}/>
      <Statistic stat={this.state.avgDailyUsage} label='Avg Daily Usage'/>
      <Statistic stat={this.state.avgDailyTemp} label='Avg Daily Temp'/>
      <DailyUsageChart homeId={this.props.match.params.homeId}/>
    </div>
    );
 }
}

class Score extends Component {
  render() {
    return (
        <Paper>
        <Typography variant='display3'>{this.props.score}</Typography>
        </Paper>
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

class DailyUsageChart extends Component {
  constructor(props) {
    super(props);
    this.state = this.newDefaultState();
    this.options = {
      scaleShowGridLines: false,
      datasetFile: false,
      scaleBeginAtZero: true,
      responsive: true
    };
  }

  newDefaultState() {
    return {
          labels: [],
          datasets: [
          {
            label: "Daily Energy Usage",
            fillColor: "rgba(220,220,220,0.2)",
			      strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: []
          }
          ]
        };
  }

 componentWillMount() {
   const homeId = this.props.homeId;
    fetch(`${REACT_APP_API_ENDPOINT}/api/1/subscriptions/homescore/${homeId}/energy/usage/daily`)
      .then(res => res.json())
      .then(result => {
        let newState = this.newDefaultState();
        result.daily_energy_usage.forEach(d => {
          const key = Object.keys(d)[0];
          const day = key.split('/')[1];
          newState.labels.push(day);
          newState.datasets[0].data.push(d[key]);
        });
        this.setState(newState);
      });
  }

  render() {
    return (
      <div>
        <LineChart data={this.state} options={this.options} width="900px"/>
      </div>
    );
  }
}

export default App;
