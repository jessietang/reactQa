/**
 * Created by jessietang on 11/15/2016.
 */
var React = require('react');
var ShowAddBtn = require('./ShowAddBtn.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');
module.exports = React.createClass({
    getInitialState: function(){
        var questions = [
            {
                key: 1,
                title: '产品经理与程序员矛盾的本质是什么？',
                description: '理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
                voteCount: 2
            },
            {
                key: 2,
                title: '热爱编程是一种怎样的体验？',
                description: '别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
                voteCount: 3
            }
        ];
        questions = this.questionSort(questions);
        return {
            displayForm: false,
            questions: questions
        };
    },
    onToggleForm: function(){
        this.setState({
            displayForm: !this.state.displayForm
        });
    },
    onQuestionNew: function(newQuestion){
        newQuestion.key = this.state.questions.length + 1;
        var newQuestions = this.state.questions.concat(newQuestion);
        newQuestions = this.questionSort(newQuestions);
        this.setState({
            questions: newQuestions
        });
    },
    questionSort: function(questions){
        questions.sort(function(a,b){
            return b.voteCount - a.voteCount;
        });
        return questions;
    },
    onVote: function(nowKey, newVoteCount){
        var questions = this.state.questions;
        var index = 0;
        for(var i=0; i<questions.length; i++){
            if(questions[i].key == nowKey){
                index = i;
            }
        }
        questions[index].voteCount = newVoteCount;
        questions = this.questionSort(questions);
        this.setState({
            questions: questions
        });
    },
    render: function(){
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React问答</h1>
                        <ShowAddBtn onToggleForm={this.onToggleForm}/>
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm onQuestionNew={this.onQuestionNew} displayForm={this.state.displayForm} onToggleForm={this.onToggleForm}/>
                    <QuestionList onVote={this.onVote} questions={this.state.questions}/>
                </div>
            </div>
        )
    }
});