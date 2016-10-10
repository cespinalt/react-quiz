import React, {Component} from 'react';

class Score extends Component {
  render() {
    const length = this.props.questions.length;
    const current = this.props.current;
    return(
      <div className="row">
        <div className="col-xs-12">
          <span className="pull-left">Question {current > length ? length: current} out of {length}</span>
          <span className="pull-right">Score: {(this.props.score / length) * 100}</span>
        </div>
      </div>
    )
  }
}

export default Score;
