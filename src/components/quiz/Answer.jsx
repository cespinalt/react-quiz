import React, {Component} from 'react';

class Answer extends Component {
  onSubmitHandler(e) {
    e.preventDefault();
    let correct = 0;
    if (e.target.value === this.props.correct){
      console.log(e.target.value,this.props.correct)
      correct = 1;
    }

    this.props.onChangeHandler(correct);
  }

  render() {
    return(
      <li className="list-group-item">
        <label>{this.props.answer.id}.</label>
        <input className="form-group" type="radio" name="answer"
        onChange={this.onSubmitHandler.bind(this)}  value={this.props.answer.id}/>
        <span>{this.props.answer.text}</span>
      </li>
    )
  }
}

export default Answer;
