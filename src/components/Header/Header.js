import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
            </header>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(Feelings);