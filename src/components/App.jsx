import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';

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

  displayNextQuestion() {
    this.setState({current: (this.state.current + 1)});
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <QuestionList {...this.state}
          onChangeHandler={this.displayNextQuestion.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;
