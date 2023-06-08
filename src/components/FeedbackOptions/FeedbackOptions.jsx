import React from 'react';
import { FeedbackOptionsStyled, Title, FeedbackBtn } from './FeedbackOptionsStyled';
import PropTypes from 'prop-types';
export function FeedbackOptions({ array, onLeaveFeedback }) {
  return (
    <FeedbackOptionsStyled>
      <Title>Please leave feedback</Title>
      {array.map(el => {
        return (
          <FeedbackBtn type="button" key={el} onClick={() => onLeaveFeedback(el)}>
            {el}
          </FeedbackBtn>
        );
      })}
    </FeedbackOptionsStyled>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
