import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component allows the user to review their feeback before submitting it
// to the server.
class Review extends Component {

    // If the rating has not yet been set, returns a placeholder character
    ratingOrSpacer(rating) {
        if (rating) {
            return rating;
        } else {
            return '_';
        }
    }

    // Builds a 'Submit' button for the current feeback dataset. Changes button 
    // to enabled with different text when the feeback is complete and ready to
    // POST to the server.
    submitButton() {
        const ready = this.readyToSubmit();
        if (ready) {
            return (<button onClick={this.submit}>Submit</button>);
        } else {
            return (<button disabled>Incomplete</button>);
        } 
    }

    // Returns true if all required fields are filled out and this dataset is 
    // ready to submit to the server.
    readyToSubmit() {
        const feelings = this.props.rs.feelingsRating;
        const understanding = this.props.rs.understandingRating;
        const support = this.props.rs.supportRating;
        if (feelings && understanding && support) {
            return true;
        }
        return false;
    }

    // Sends the user's feedback to the server (via POST /prime-feeback)
    submit = (event) => {
        const feeback = {
            feeling: this.props.rs.feelingsRating,
            understanding: this.props.rs.understandingRating,
            support: this.props.rs.supportRating,
            comments: this.props.rs.comments,
        };
        axios({
            method: 'POST',
            url: '/prime-feeback',
            data: feeback,
        }).then((response) => {
            console.log(response);
            // TODO: Send browser to confirmation/thank-you page url
            // this.props.history.push('/thank-you');
        }).catch((error) => {
            // TODO: Optimize error display for users
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        });
    }

    // Display component on page
    render() {
        const feelings = this.ratingOrSpacer(this.props.rs.feelingsRating);
        const understanding = this.ratingOrSpacer(this.props.rs.understandingRating);
        const support = this.ratingOrSpacer(this.props.rs.supportRating);
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {feelings}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {this.props.rs.comments}</p>
                {this.submitButton()}
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);