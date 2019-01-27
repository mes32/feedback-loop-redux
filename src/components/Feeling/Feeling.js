import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rating from '../../classes/Rating.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

// This component prompts the user to rate their current emotional state
class Feeling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: new Rating(),
            readyNext: false,
        }
    }

    // When a number is typed in the input field...
    // Set the current rating to that number. Check if that number is valid and
    // the 'Next' button should therefore be enabled.
    enteredNumber = (event) => {
        const rating = new Rating(event.target.value);
        this.setState({
            rating: rating,
            readyNext: rating.isValid(),
        });
    }

    // When the 'Next' button is pressed...
    // Set the feelings rating reducer to equal the current rating. Move the
    // user's web browser to /form-part-2.
    pressedNext = (event) => {
        const action = {
            type: 'SET_FEELING',
            payload: this.state.rating.value,
        };
        this.props.dispatch(action);
        this.props.history.push('/form-part-2');
    }

    // Display component on page
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input onChange={this.enteredNumber} type="number" placeholder="(1 thru 5)" />
                <button onClick={this.pressedNext} disabled={!this.state.readyNext}>Next</button>
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Feeling);