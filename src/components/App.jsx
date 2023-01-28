import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import { Component } from 'react';
import css from './app.module.scss';

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
      <div className={css.div}
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