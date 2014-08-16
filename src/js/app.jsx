/** @jsx React.DOM */

'use strict';

var React = require('react');

var ArticleView = require('./views/article.jsx');
var MainView = require('./views/main.jsx');

var app = module.exports = React.createClass({
  getDefaultProps: function() {
    return { articles: [] };
  },

  getInitialState: function(){
    return { article: null }
  },

  render: function(){
    return (
      <div id="app-chrome">
        <header id="app-header">
          <img src="src/assets/bbc_logo.png" alt="BBC"/>
        </header>

        <main id="app-container" onClick={this.handleClick}>

          <MainView items={this.props.articles} />
          <ArticleView data={this.state.article} />

        </main>
      </div>
    );
  },

  handleClick: function(event){
    if (!event.data){
      return;
    }

    if (event.data.action === 'article.open') {
      this.setState({ article: event.data.actionObject });
    }

    if (event.data.action === 'article.close') {
      this.setState({ article: null });
    }
  }
});