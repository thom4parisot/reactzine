/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function(){
    return (
      <span className="content__duration">{this.getDurationLabel()}</span>
    );
  },

  getDurationLabel: function getDurationLabel(){
    return this.props.duration && Math.ceil(this.props.duration / 60) + ' min';
  }
});