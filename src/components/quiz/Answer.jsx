import React, {Component} from 'react';

class Question extends Component {
  render() {
    return(
      <li className="list-group-item">
        <label>{this.props.answer.id}.</label>
        <input className="form-group" type="radio" name="answer" />
        <span>{this.props.answer.text}</span>
      </li>
    )
  }
}

export default Question;
