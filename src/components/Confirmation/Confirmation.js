import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';

// This thanks the user for completing feeback and prompts them to start over
class Confirmation extends Component {

    pressedContinue = (event) => {
        const action = {
            type: 'RESET_ALL',
        };
        this.props.dispatch(action);
        this.props.history.push('/');
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header heading='Thank You!' />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" component="h2" gutterBottom={true}>
                            Thanks for leaving your feedback
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.pressedContinue} variant="contained" color="primary">Leave New Feedback</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(Confirmation);