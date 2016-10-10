import React, {Component} from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.onChangeHandler();
  }

  render() {
    return(
      <div className="well">
        <form className="form-group" onSubmit={this.onSubmitHandler.bind(this)}>
          {this.props.questions.map((q, i) => {
            if(this.props.current === q.id){
              return <Question question={q} key={q.id}
              onChangeHandler={this.onSubmitHandler} />
            }
          })}
          <button className="btn btn-primary">Next</button>
        </form>
      </div>
    )
  }
}

export default QuestionList;
