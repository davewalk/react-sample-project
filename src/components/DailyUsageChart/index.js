import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs';
const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default class DailyUsageChart extends Component {
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
