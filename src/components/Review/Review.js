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
                <p>Feelings: ---</p>
                <p>Understanding: ---</p>
                <p>Support: ---</p>
                <p>Comments: ---</p>
                {this.renderSubmitButton()}
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);