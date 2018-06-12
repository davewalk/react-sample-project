import React, { Component } from 'react';

export default class Statistic extends Component {
  render() {
    return (
      <div>
        {this.props.stat}<br />
        {this.props.label}
      </div>
    );
  }
}
