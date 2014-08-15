/** @jsx React.DOM */

'use strict';

var React = require('react');
var Item = require('../components/item.jsx');

function getLayout(index, arr, rules){
  var rule;

  Object.keys(rules).some(function(ruleKey){
    var result = rules[ruleKey](index, arr);

    if (result){
      rule = ruleKey;
      return true;
    }
  });

  return rule;
}

module.exports = React.createClass({
  getInitialState: function() {
    return {items: []};
  },

  render: function(){
    var itemNodes = this.props.items.map(this.renderPageItem);

    return (
      <div className="items-list">{itemNodes}</div>
    );
  },

  renderPageItem: function(itemData, i, arr){
    var layout = getLayout(i, arr, {
      'double': function(i){ return i < 2 },
      'hero': function(i, arr){ return i === arr.length - 1; }
    });

    return (
      <Item layout={layout} data={itemData}></Item>
    );
  }
});