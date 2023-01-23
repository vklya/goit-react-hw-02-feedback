import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState(prevState => {
      return {[name]: prevState[name] + 1}
    });
  };

  calcFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }


  calcPercent = propName => {
        const total = this.calcFeedback();
        if (!total) return 0;
        const value = this.state[propName];
        const result = ((value / total) * 100).toFixed(2);
        return Number(result);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const goodPercent = this.calcPercent('good');
    console.log(Object.keys(this.state));

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!this.totalFeedback ? (
            <Notification text="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.calcFeedback()}
              positivePercentage={goodPercent}
            />
          )}
        </Section>
      </>
    );
  }
}