import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

// Shows the admin page
class AdminReview extends Component {
    render() {
        return (
            <div>
                <Header heading="Admin Review" subHeading="Feedback Results" />
                <p>[AdminReview]</p>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(AdminReview);