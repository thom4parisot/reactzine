/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
  render: function(){
    var data = this.props.data;

    return (
      <article className="item">
        <header className="item__cover" data-background={data.image}></header>

        <h2>{data.name}</h2>

        <footer>
          <ul className="item-metadata">
            <li class="item-metadata__source">{data.source}</li>
            <li class="item-metadata__duration">{data.duration}</li>
          </ul>
        </footer>
      </article>
      );
  }
});