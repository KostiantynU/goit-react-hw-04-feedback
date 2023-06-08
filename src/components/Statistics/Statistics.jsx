import React from 'react';
import { StatisticSection, Paragraph, SubTitle } from './StatisticsStyled';
import PropTypes from 'prop-types';

export function Statistics({ avarage, total, good, neutral, bad }) {
  return (
    <StatisticSection>
      <SubTitle>Statistics</SubTitle>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>Positive feedback: {avarage}</Paragraph>
    </StatisticSection>
  );
}
Statistics.propTypes = {
  avarage: PropTypes.string,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
