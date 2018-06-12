import { Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';

export default class Score extends Component {
  render() {
    return (
        <Paper>
        <Typography variant='display3'>{this.props.score}</Typography>
        </Paper>
    );
  }
}
