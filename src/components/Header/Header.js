import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

// Displays a header bar at the top of the page
class Header extends Component {
    constructor(props) {
        super(props);
        if (!this.props.heading) {
            this.mainHeading = 'Feedback Form';
        } else {
            this.mainHeading = this.props.heading;
        }
    }

    // Display component on page
    render() {
        return (
            <AppBar position="static">
                <Typography variant="h6" color="inherit">
                    {this.mainHeading}
                </Typography>
            </AppBar>
        );
    }
}

export default Header;
