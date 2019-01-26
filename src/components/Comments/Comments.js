import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component prompts the user for miscellaneous comments
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
        }
    }

    // When a text is typed in the input field...
    // Set the current comment text to match.
    enteredText = (event) => {
        const commentText = event.target.value;
        this.setState({
            commentText,
        });
    }

    // When the 'Next' button is pressed...
    // Set the comments reducer to equal the current text. Move the user's web
    // browser to /form-part-5.
    pressedNext = (event) => {
        const action = {
            type: 'SET_COMMENTS',
            payload: this.state.commentText,
        };
        this.props.dispatch(action);
        this.props.history.push('/form-review');
    }

    // Display component on page
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input onChange={this.enteredText} type="text" placeholder="...your thoughts" />
                <button onClick={this.pressedNext}>Next</button>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Comments);