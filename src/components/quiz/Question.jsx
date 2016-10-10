import React, {Component} from 'react';
import Answer from './Answer.jsx';

class Question extends Component {
  render() {
    return(
      <div className="">
        <h3>{this.props.question.text}</h3>
        <ul className="list-group">
          {this.props.question.choices.map(a => {
            return <Answer answer={a} key={a.id}
            onChangeHandler={this.props.onChangeHandler}
            correct={this.props.question.correct} />
          })}
        </ul>
      </div>
    )
  }
}

export default Question;
