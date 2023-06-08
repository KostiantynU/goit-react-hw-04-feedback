import React, { useState } from 'react';
import { MainSection, NotificationMessage } from './AppStyled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const temporaryObject = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log('Something goes wrong');
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / (neutral + bad)) * 100).toFixed() + '%';
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <MainSection>
      <FeedbackOptions array={Object.keys(temporaryObject)} onLeaveFeedback={onLeaveFeedback} />
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
