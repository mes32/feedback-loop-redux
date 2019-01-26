import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    renderSubmitButton() {
        const complete = this.isComplete();
        if (complete) {
            return (<button>Submit</button>);
        } else {
            return (<button disabled>Incomplete</button>);
        } 
    }

    // Returns true if all required fields are filled out and this dataset is 
    // ready to submit to the server.
    isComplete() {
        const feelings = this.props.rs.feelingsRating;
        const understanding = this.props.rs.understandingRating;
        const support = this.props.rs.supportRating;
        if (feelings && understanding && support) {
            return true;
        }
        return false;
    }

    // Display component on page
    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.rs.feelingsRating}</p>
                <p>Understanding: {this.props.rs.understandingRating}</p>
                <p>Support: {this.props.rs.supportRating}</p>
                <p>Comments: {this.props.rs.comments}</p>
                {this.renderSubmitButton()}
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);