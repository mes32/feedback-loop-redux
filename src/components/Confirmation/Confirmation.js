import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

// This thanks the user for completing feeback and prompts them to start over
class Confirmation extends Component {

    pressedContinue = (event) => {
        const action = {
            type: 'RESET_ALL',
        };
        this.props.dispatch(action);
        this.props.history.push('/');
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header heading='Thank You!' />
                <h2>Thank you for your feedback</h2>
                <button onClick={this.pressedContinue}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(Confirmation);