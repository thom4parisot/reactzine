/** @jsx React.DOM */

'use strict';

var React = require('react');
var Item = require('../components/item.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {items: []};
  },

  render: function(){
    var itemNodes = this.props.items.map(this.renderItem);

    return (
      <div className="items-list">{itemNodes}</div>
    );
  },

  renderItem: function(itemData){
    return (
      <Item data={itemData}></Item>
    );
  }
});