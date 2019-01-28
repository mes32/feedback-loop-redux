import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import ReviewCard from '../ReviewCard/ReviewCard.js';

// This component prompts the user for miscellaneous comments
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: '',
        }
    }

    // When a text is typed in the input field...
    // Set the current comment text to match.
    enteredText = (event) => {
        this.setState({
            commentText: event.target.value,
        });        
    }

    // When the 'Next' button is pressed...
    // Set the comments reducer to equal the current text. Move the user's web
    // browser to /form-part-5.
    pressedNext = (event) => {
        const action = {
            type: 'SET_COMMENTS',
            payload: this.state.commentText,
        };
        this.props.dispatch(action);
        this.props.history.push('/form-review');
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header />
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" variant="h5" component="h2" gutterBottom={true}>
                            Any comments you want to leave?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <TextField
                            onChange={this.enteredText}
                            label="Your thoughts..."
                            defaultValue=""
                        />
                        <Button onClick={this.pressedNext} variant="contained" color="primary" size="small">Next</Button>
                    </CardActions>
                </Card>
                <ReviewCard history={this.props.history} />
            </div>
        );
    }
}

export default connect()(Comments);