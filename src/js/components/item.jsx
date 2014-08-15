/** @jsx React.DOM */

'use strict';

var React = require('react');
var cx = require('react-classset');

var Duration = require('./duration.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return { selected: false, favourited: false };
  },

  render: function(){
    var data = this.props.data;

    return (
      <article className={this.getClassNames()} onClick={this.handleClick}>
        <header className="item__cover" data-background={data.image}></header>

        <h2>{data.name}</h2>

        <footer>
          <ul className="item-metadata">
            <li className="item-metadata__source">{data.source}</li>
            <li className="item-metadata__duration"><Duration duration={data.duration} /></li>
          </ul>

          <ul className="item-actions">
            <li className="item-actions__playback">
              <a href="#play" onClick={this.handleClick}>
                {data.duration && 'Play'}
              </a>
            </li>
            <li className="item-actions__favourites">
              <a href="#favourite" onClick={this.toggleFavourite}>
                {!this.state.favourited ? 'Add to' : 'Remove from'} favourites
              </a>
            </li>
          </ul>
        </footer>
      </article>
      );
  },

  /*
   Events
   */
  handleClick: function(event){
    event.preventDefault();

    this.setState({ selected: !this.state.selected, favourited: this.state.favourited });
  },

  toggleFavourite: function toggleFavourite(event) {
    event.stopPropagation();
    event.preventDefault();

    this.setState({ selected: this.state.selected, favourited: !this.state.favourited });
  },

  /*
   UI Helpers
   */

  getClassNames: function getClassNames(){
    return cx(
      'item',
      'item--' + (this.props.data.type || 'unknown'),
      this.state.favourited && 'item--favourited',
      this.state.selected && 'item--selected'
    );
  }
});