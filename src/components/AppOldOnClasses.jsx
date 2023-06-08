import React, { Component } from 'react';
import { MainSection, NotificationMessage } from './AppStyled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good / (neutral + bad)) * 100).toFixed() + '%';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <MainSection>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} array={Object.keys(this.state)} />
        {total === 0 ? (
          <NotificationMessage>There is no feedback</NotificationMessage>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            avarage={positiveFeedbackPercentage}
          />
        )}
      </MainSection>
    );
  }
}
