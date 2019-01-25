import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
    render() {
        return (
            <p>[Support]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Support);