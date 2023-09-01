import React from 'react';
import PropTypes from 'prop-types';
 
export const Statistics = ({ good, bad, neutral, total, percentage}) => {
    if (!total) {
        return <h3>There is no feedback</h3>
    }
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Bad: {bad}</li>
            <li>Neutural: {neutral}</li>
            <li>Total: {total}</li>
            <li>Positive feedbacks: {percentage}%</li>
        </ul>
    );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;