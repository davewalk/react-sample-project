import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Score from '../Score';
import Message from '../Message';
import Statistic from '../Statistic';
import DailyUsageChart from '../DailyUsageChart';

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default class HomeResults extends Component {
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
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Statistic stat={this.state.avgDailyUsage} label='Average Daily Usage'/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Statistic stat={`${this.state.avgDailyTemp}°`} label='Average Daily Temp'/>
        </Grid>
      </Grid>
      <DailyUsageChart homeId={this.props.match.params.homeId}/>
    </div>
  );
 }
}
