/**
 * Created by jessietang on 11/15/2016.
 */
var React = require('react');
var QuestionItem = require('./QuestionItem.js');
module.exports = React.createClass({
    render: function(){
        var questions = this.props.questions;
        var _this = this;
        var questionComps = questions.map(function(qst){
            return <QuestionItem
                key={qst.key}
                questionKey={qst.key}
                title={qst.title}
                description={qst.description}
                voteCount={qst.voteCount}
                onVote={_this.props.onVote}/>
        });
        return (
            <div id="questions" className="">
                {questionComps}
            </div>
        )
    }
});