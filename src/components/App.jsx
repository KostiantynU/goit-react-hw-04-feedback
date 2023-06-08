import React, { useState } from 'react';
import { MainSection, NotificationMessage } from './AppStyled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export function App() {
  // Спочатку зробив окремі стані, для кожного значення, в яких зберігав примітив
  // Але, прийшлося збирати в тимчасовий об'єкт, щоб передати масив у FeedbackOptions

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  // const temporaryObject = { good, neutral, bad };

  // const onLeaveFeedback = option => {
  //   switch (option) {
  //     case 'good':
  //       setGood(good + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(neutral + 1);
  //       break;
  //     case 'bad':
  //       setBad(bad + 1);
  //       break;
  //     default:
  //       console.log('Something goes wrong');
  //   }
  // };

  // const countTotalFeedback = () => {
  //   return [good, neutral, bad].reduce((acc, el) => {
  //     return acc + el;
  //   }, 0);
  // };

  // А тут переробив стан на об'єкт, і працює. Але чи коректно так робити, саме в
  // даній задачі?

  const [myState, mySetState] = useState({ good: 0, neutral: 0, bad: 0 });
  const onLeaveFeedback = option => {
    mySetState(prevState => ({ ...prevState, [option]: myState[option] + 1 }));
    // switch (option) {
    //   case 'good':
    //     mySetState(prevState => ({ ...prevState, good: myState.good + 1 }));
    //     break;
    //   case 'neutral':
    //     mySetState(prevState => ({ ...prevState, neutral: myState.neutral + 1 }));
    //     break;
    //   case 'bad':
    //     mySetState(prevState => ({ ...prevState, bad: myState.bad + 1 }));
    //     break;
    //   default:
    //     console.log('Something goes wrong');
  };
  // };

  const countTotalFeedback = () => {
    return Object.values(myState).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return ((good / (neutral + bad)) * 100).toFixed() + '%';
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(myState);

  return (
    <MainSection>
      <FeedbackOptions array={Object.keys(myState)} onLeaveFeedback={onLeaveFeedback} />
      {total === 0 ? (
        <NotificationMessage>There is no feedback</NotificationMessage>
      ) : (
        <Statistics
          good={myState.good}
          neutral={myState.neutral}
          bad={myState.bad}
          total={total}
          avarage={positiveFeedbackPercentage}
        />
      )}
    </MainSection>
  );
}
