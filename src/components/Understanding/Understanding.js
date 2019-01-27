import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from '../ReviewCard/ReviewCard.js';

const MIN_RATING = 1;
const MAX_RATING = 5;

// This component prompts the user to rate their current level of understanding
// the content
class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            readyNext: false,
        }
    }

    // When a number is typed in the input field...
    // Set the current rating to that number. Check if that number is valid and
    // the 'Next' button should therefore be enabled.
    enteredNumber = (event) => {
        const rating = parseInt(event.target.value);
        const readyNext = this.ratingIsValid(rating);
        this.setState({
            rating,
            readyNext,
        });
    }

    // Return true if the current rating is usable
    ratingIsValid(rating) {
        if (rating < MIN_RATING || rating > MAX_RATING) {
            return false;
        } else {
            return true;
        }
    }

    // When the 'Next' button is pressed...
    // Set the understanding rating reducer to equal the current rating. Move 
    // the user's web browser to /form-part-3.
    pressedNext = (event) => {
        const action = {
            type: 'SET_UNDERSTANDING_RATING',
            payload: this.state.rating,
        };
        this.props.dispatch(action);
        this.props.history.push('/form-part-3');
    }

    // Display component on page
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <input onChange={this.enteredNumber} type="number" placeholder="(1 thru 5)" />
                <button onClick={this.pressedNext} disabled={!this.state.readyNext}>Next</button>
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Understanding);