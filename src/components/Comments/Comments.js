import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {
        return (
            <p>[Comments]</p>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Comments);