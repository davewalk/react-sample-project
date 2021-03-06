import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs';
import { Card, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const styles = {
  root: {
    margin: 40,
  }
};

export default withStyles(styles)(
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
            fillColor: "#fff",
            strokeColor: "#e6168b",
            borderWidth: 10,
            pointColor: "#e6168b",
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
      const { classes } = this.props;

      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary">
              Usage by Day (in December)
            </Typography>
            <LineChart data={this.state} options={this.options} width="900px"/>
          </CardContent>
        </Card>
      );
    }
  }
)
