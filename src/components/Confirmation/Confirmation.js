import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <h2>Thank you for your feedback</h2>
                <button onClick={this.pressedContinue}>Leave New Feedback</button>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Confirmation);