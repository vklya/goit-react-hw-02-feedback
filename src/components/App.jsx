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


  calcPercent = () => {
    const total = this.calcFeedback();
    if (!total) return 0;
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
};

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.calcFeedback();

    return (
      <div
        style={{
          width: '400px',
          margin: '30px auto',
          backgroundColor: '#2d4262',
          borderRadius: '8px',
          boxShadow: '0px 0px 8px 6px rgba(199, 199, 199, 1)',
          padding: '16px 0',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification text="There is no feedbacks" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.calcFeedback()}
              positivePercentage={this.calcPercent()}
            />
          )}
        </Section>
      </div>
    );
  }
}