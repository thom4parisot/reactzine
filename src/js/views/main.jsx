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
    var pages = this.paginate(5);

    return (
      <div className="items-list">{pages}</div>
    );
  },

  paginate: function(itemsPerPage){
    var i = 0;
    var length = this.props.items.length;
    var pages = [];
    var self = this;

    for (; i < length; i += itemsPerPage){
      pages.push(this.props.items.slice(i, i + itemsPerPage));
    }

    return pages.map(function(page, i){
      return (
        <div key={i} className="items-list__page">
          {page.map(self.renderPageItem)}
        </div>
      )
    });
  },

  renderPageItem: function(itemData, i, arr){
    var layout = getLayout(i, arr, {
      'double': function(i){ return i < 2 },
      'hero': function(i, arr){ return i === arr.length - 1; }
    });

    return (
      <Item key={'article.' + i} layout={layout} data={itemData}></Item>
    );
  }
});