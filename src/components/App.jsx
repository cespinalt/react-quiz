import React, {Component} from 'react';
import Question from './quiz/Question.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    return(
      <div>
        {this.state.questions.map(q => {
          return <Question questions={q} />
        })}
      </div>
    )
  }
}

export default App;
