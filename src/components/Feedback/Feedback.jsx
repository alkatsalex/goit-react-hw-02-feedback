import React, { Component } from "react";
import css from "./Feedback.module.css"


 class Feedback extends Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

      


      incrementFBGood = () => {
        this.setState((ps) => ({
          good: ps.good + 1
        }
        ));
      };
      incrementFBNeutral = () => {
        this.setState((ps) => ({
            neutral: ps.neutral + 1,
        }
        ));
      };
      incrementFBBad = () => {
        this.setState((ps) => ({
            bad: ps.bad + 1
        }
        ));
      };

      countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
      }

      countPositiveFeedbackPercentage = () => {
       return this.countTotalFeedback() === 0 ? 0 :  Math.round((100 / this.countTotalFeedback()) * this.state.good);
      }
      


    render () {

        return (
            <section>
        <h2>Please leave feedback</h2>
        <div>

            <ul className={css.feedbackOptions}>
                <li><button className={css.btn} type="button" onClick={this.incrementFBGood}>Good</button></li>
                <li><button className={css.btn} type="button" onClick={this.incrementFBNeutral}>Neutral</button></li>
                <li><button className={css.btn} type="button" onClick={this.incrementFBBad}>Bad</button></li>
            </ul>

            </div>

            <h3>Statistics</h3>
            
            <div>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {this.countTotalFeedback()}</li>
                    <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </div>
        
    </section>
        )

}

}


export default Feedback
    
