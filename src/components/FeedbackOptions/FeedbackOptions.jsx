import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {
    return (
        <div>
            {options.map(option => (<button onClick={()=> handleClick(option)} key={option} type="button" name={option}>{option}</button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;