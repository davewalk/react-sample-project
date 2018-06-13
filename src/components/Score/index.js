import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';

function getColor(score) {
  if (score < 40) return '#ff2424';
  if (score < 80) return '#ffff24';
  return '#009300';
}

export default class Score extends Component {
  render() {
    return (
        <Paper>
          <Gauge value={this.props.score} backgroundColor="#fff" label="" color={getColor(this.props.score)}/>
        </Paper>
    );
  }
}
