'use strict';

var getData = require('./feed.js').get;
var MainView = require('./views/main.jsx');
var React = module.exports.React = require('react');

var appContainerElement = document.getElementById('app-container');

/*
 React Setup
 */
React.initializeTouchEvents(true);

/*
 Construct the App skeleton
 */
React.renderComponent(MainView({ items: [] }), appContainerElement);

/*
 Gets data asynchronously
 */
getData('data.json', onDataSuccess, onDataError);
//getData('https://s3-eu-west-1.amazonaws.com/irfs-application/data.json', onDataSuccess, onDataError);

/*
 Callbacks
 */

function onDataSuccess(items){
  React.renderComponent(MainView({ items: items }), appContainerElement);

}

function onDataError(err){

}