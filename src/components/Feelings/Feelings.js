import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    render() {
        return (
            <p>[Feelings]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Feelings);