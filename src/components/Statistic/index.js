import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = {
  root: {
    margin: 40,
    padding: 25
  }
};

function Statistic(props) {
  const { classes } = props;
  return <Paper className={classes.root}>
    <Typography color={'primary'} align={'center'} variant={'display3'}>{props.stat}</Typography><br />
    <Typography color={'primary'} align={'center'} variant={'display1'}>{props.label}</Typography>
  </Paper>
}

export default withStyles(styles)(Statistic);
