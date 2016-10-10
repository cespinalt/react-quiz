import React, {Component} from 'react';
import Question from './Question.jsx';

class QuestionList extends Component {
  render() {
    return(
      <div className="well">
        <form className="form-group">
          {this.props.questions.map((q, i) => {
            if(this.props.current === q.id){
              return <Question question={q} key={q.id}
              onChangeHandler={this.props.onChangeHandler} />
            }
          })}
        </form>
      </div>
    )
  }
}

export default QuestionList;
