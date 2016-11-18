/**
 * Created by jessietang on 11/15/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./components/QuestionApp.js');
/* 模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）*/

var mainCom = ReactDOM.render(
    <QuestionApp />,
    document.getElementById('app')
);