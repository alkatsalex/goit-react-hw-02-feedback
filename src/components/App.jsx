import React, { Component } from "react";
import FeedbackOptions from "./Feedback/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics.jsx"
import Section from "./Section/Section.jsx";



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }


  addFeedback = (option) => {
    this.setState({[option]: this.state[option] + 1 });
  };


  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
   return this.countTotalFeedback() === 0 ? 0 :  Math.round((100 / this.countTotalFeedback()) * this.state.good);
  }
  


render () {

    return (
      <div
      style={{
        width: '600px',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
<Section
title="Please leave feedback"> 
<FeedbackOptions
 options={this.state}
 action={this.addFeedback}/>
</Section>

          

<Section
title="Statistics">
<Statistics
  good={this.state.good}
  neutral={this.state.good}
  bad={this.state.good}
  total={this.countTotalFeedback()}
  persent={this.countPositiveFeedbackPercentage()}/>
</Section>



</div>
    )

}

}

