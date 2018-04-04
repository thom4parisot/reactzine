'use strict';

var getData = require('./feed.js').get;
var React = module.exports.React = require('react');

var AppView = require('../jsx/app.jsx');
var appContainerElement = document.body;

/*
 React Setup
 */
React.initializeTouchEvents(true);

/*
 Construct the App skeleton
 */
React.renderComponent(AppView(), appContainerElement);

/*
 Gets data asynchronously
 */
getData('data.json', onDataSuccess, onDataError);
//getData('https://s3-eu-west-1.amazonaws.com/irfs-application/data.json', onDataSuccess, onDataError);

/*
 Callbacks
 */

function onDataSuccess(items){
  React.renderComponent(AppView({ articles: items }), appContainerElement);
}

function onDataError(err){

}
