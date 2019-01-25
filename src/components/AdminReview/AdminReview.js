import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminReview extends Component {
    render() {
        return (
            <p>[AdminReview]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(AdminReview);