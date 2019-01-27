import React, { Component } from 'react';

// Displays a header bar at the top of the page
class Header extends Component {
    constructor(props) {
        super(props);
        if (!this.props.heading) {
            this.mainHeading = 'Feedback!';
            this.subHeading = 'Don\'t forget it!';
        } else {
            this.mainHeading = this.props.heading;
            this.subHeading = this.props.subHeading;
        }
    }

    // Display component on page
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.mainHeading}</h1>
                <h4><i>{this.subHeading}</i></h4>
            </header>
        );
    }
}

export default Header;