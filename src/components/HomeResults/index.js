import React, { Component } from 'react';
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
      <Statistic stat={this.state.avgDailyUsage} label='Avg Daily Usage'/>
      <Statistic stat={this.state.avgDailyTemp} label='Avg Daily Temp'/>
      <DailyUsageChart homeId={this.props.match.params.homeId}/>
    </div>
    );
 }
}
