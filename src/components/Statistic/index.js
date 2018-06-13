import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = {
  root: {
    margin: 40,
  }
};

function Statistic(props) {
  const { classes } = props;
  return <Paper className={classes.root}>{props.stat}<br />{props.label}</Paper>
}

export default withStyles(styles)(Statistic);
