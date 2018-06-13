import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    'margin-left': 80,
    'margin-right': 80,
    'margin-top': 30,
    'margin-bottom': 30
  }
};

function Message(props) {
  const { classes } = props;

  return <Typography className={classes.root} align={'center'} variant={'display3'}>{props.text}</Typography>
}

export default withStyles(styles)(Message);
