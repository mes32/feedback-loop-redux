import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewCard from '../ReviewCard/ReviewCard.js';

// This component prompts the user for miscellaneous comments
class Review extends Component {

    // Display component on page
    render() {
        return (
            <div>
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);