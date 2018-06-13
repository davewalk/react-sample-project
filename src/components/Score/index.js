import React from 'react';
import Gauge from 'react-svg-gauge';

function getColor(score) {
  if (score < 40) return '#ff2424';
  if (score < 80) return '#ffff24';
  return '#009300';
}

function Score(props) {
  return <Gauge value={props.score} backgroundColor="#fff" label="" color={getColor(props.score)}/>
}

export default Score;
