import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import Score from './quiz/Score.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      current: 1,
      questions: [
        {
          id: 1,
          text: 'What\'s your father\'s name?',
          correct: 'a',
          choices: [
            {
              id: 'a',
              text: 'Hamlet',
            },
            {
              id: 'b',
              text: 'Peter',
            },
            {
              id: 'c',
              text: 'Pedro',
            },
          ]
        },
        {
          id: 2,
          text: 'What\'s your mather\'s name?',
          correct: 'a',
          choices: [
            {
              id: 'a',
              text: 'Carmen',
            },
            {
              id: 'b',
              text: 'Neysa',
            },
            {
              id: 'c',
              text: 'Jacqueline',
            },
          ]
        },
        {
          id: 3,
          text: 'What\'s your younger brother\'s name?',
          correct: 'b',
          choices: [
            {
              id: 'a',
              text: 'Hamlet',
            },
            {
              id: 'b',
              text: 'Luis',
            },
            {
              id: 'c',
              text: 'Pablo',
            },
          ]
        }
      ]
    }
  }

  displayNextQuestion(correct) {
    const stateUpdate = {}
    stateUpdate.current = this.state.current + 1;
    stateUpdate.score = this.state.score + correct;
    this.setState(stateUpdate);
  }

  render() {
    let questionList;
    if(this.state.current > this.state.questions.length) {
      questionList = '';
    } else {
      questionList = <QuestionList {...this.state} onChangeHandler={this.displayNextQuestion.bind(this)} />;
    }
    return(
      <div className="container">
        <div className="row">
          <h1 className="text-center">Simple React Quiz</h1>
          <p className="text-center">Test your awesomeness in React.js</p>
          <div className="well">
            <Score {...this.state} />
          </div>
            {questionList}
          </div>
      </div>
    )
  }
}

export default App;
