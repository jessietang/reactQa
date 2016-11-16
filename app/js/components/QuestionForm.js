/**
 * Created by jessietang on 11/15/2016.
 */
var React = require('react');
module.exports = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var newQuestion = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            voteCount: 0
        };
        this.refs.questionForm.reset();
        this.props.onQuestionNew(newQuestion);
    },
    render: function(){
        return (
            <form name="addQuestion" className="clearfix" ref="questionForm"
                  style={{display: this.props.displayForm ? 'block' : 'none'}}
                onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="qtitle">问题</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
                </div>
                <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                <a className="btn btn-success pull-right">确认</a>
                <button className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
            </form>
        )
    }
});