/**
 * Created by jessietang on 11/15/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./components/QuestionApp.js');

var mainCom = ReactDOM.render(
    <QuestionApp />,
    document.getElementById('app')
);