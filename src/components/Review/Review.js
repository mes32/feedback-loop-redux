import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {

    renderSubmitButton() {
        const complete = false;
        if (complete) {
            return (<button>Submit</button>);
        } else {
            return (<button disabled>Incomplete</button>);
        }
        
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                <p>Feelings: {this.props.rs.feelingsRating}</p>
                <p>Understanding: {this.props.rs.understandingRating}</p>
                <p>Support: {this.props.rs.supportRating}</p>
                <p>Comments: ---</p>
                {this.renderSubmitButton()}
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);