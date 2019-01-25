import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    render() {
        return (
            <p>[Understanding]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Feelings);