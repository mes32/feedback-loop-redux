import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.js';
import Rating from '../../classes/Rating.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

// This component prompts the user to enter a rating
class RatingInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: new Rating(),
            readyNext: false,
        }
    }

    // When a number is typed in the input field...
    // Set the current rating to that number. Check if that number is valid and
    // the 'Next' button should therefore be enabled.
    enteredNumber = (event) => {
        const rating = new Rating(event.target.value);
        this.setState({
            rating: rating,
            readyNext: rating.isValid(),
        });
    }

    // When the 'Next' button is pressed...
    // Set the feelings rating reducer to equal the current rating. Move the
    // user's web browser to the next URL.
    pressedNext = (event) => {
        const action = {
            type: this.props.actionType,
            payload: this.state.rating.value,
        };
        this.props.dispatch(action);
        this.props.history.push(this.props.nextURL);
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" component="h2" gutterBottom={true}>
                            {this.props.prompt}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <TextField
                            onChange={this.enteredNumber} type="number"
                            label="Rate: 1 thru 5"
                            defaultValue=""
                        />
                        <Button onClick={this.pressedNext} disabled={!this.state.readyNext} variant="contained" color="primary" size="small">Next</Button>
                    </CardActions>
                </Card>
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

export default connect()(RatingInput);