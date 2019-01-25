import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <p>[Review]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Review);