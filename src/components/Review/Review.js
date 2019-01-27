import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

// This component prompts the user for miscellaneous comments
class Review extends Component {

    // Display component on page
    render() {
        return (
            <div>
                <Header />
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

export default connect()(Review);