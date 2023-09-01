import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from "@mui/material";
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    })
    )
  };
    
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral
  };
    
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
   };


  render() { 

    return (
      <Container>        
        <Section title="Please leave feedback">
          <FeedbackOptions handleClick={this.handleClick} options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()} />
        </Section>        
      </Container>
    )
  }
};

// countPositiveFeedbackPercentage = () => {
  
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return Math.abs((this.state.good/total)*100).toFixed(2);
//     }
//    };