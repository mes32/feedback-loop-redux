import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import React, { Component } from 'react';
import { connect } from 'react-redux';

// This component allows the user to review their feeback before submitting it
// to the server.
class ReviewCard extends Component {

    // If the rating has not yet been set, returns a placeholder character
    ratingOrSpacer = (rating) => {
        if (rating) {
            return rating;
        } else {
            return '_';
        }
    }

    // Builds a 'Submit' button for the current feeback dataset. Changes button 
    // to enabled with different text when the feeback is complete and ready to
    // POST to the server.
    submitButton = () => {
        const feeling = this.props.rs.feeling;
        const understanding = this.props.rs.understanding;
        const support = this.props.rs.support;
        if (feeling && understanding && support) {
            return (<Button onClick={this.submit} variant="contained" color="primary">Submit</Button>);
        } else {
            return (<Button disabled variant="contained" color="primary">Incomplete</Button>);
        } 
    }

    // Sends the user's feedback to the server (via POST /prime-feeback)
    submit = (event) => {
        const feeback = {
            feeling: this.props.rs.feeling,
            understanding: this.props.rs.understanding,
            support: this.props.rs.support,
            comments: this.props.rs.comments,
        };
        axios({
            method: 'POST',
            url: '/prime-feedback',
            data: feeback,
        }).then((response) => {
            this.props.history.push('/form-confirmation');
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            alert(errorMessage);
            console.log(errorMessage);
        });
    }

    // Display component on page
    render() {
        const feeling = this.ratingOrSpacer(this.props.rs.feeling);
        const understanding = this.ratingOrSpacer(this.props.rs.understanding);
        const support = this.ratingOrSpacer(this.props.rs.support);
        const comments = this.props.rs.comments;
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" variant="h5" component="h2" gutterBottom={true}>
                        Review Your Feedback
                    </Typography>
                    <Typography color="textPrimary" variant="body2" paragraph={true}>
                        Feelings: {feeling}
                    </Typography>
                    <Typography color="textPrimary" variant="body2" paragraph={true}>
                        Understanding: {understanding}
                    </Typography>
                    <Typography color="textPrimary" variant="body2" paragraph={true}>
                        Support: {support}
                    </Typography>
                    <Typography color="textPrimary" variant="body2" paragraph={true}>
                        Comments: {comments}
                    </Typography>
                </CardContent>
                <CardActions>
                    {this.submitButton()}
                </CardActions>
            </Card>
        );
    }
}

const mapReduxStoreToProps = (rs) => { return { rs } };
export default connect(mapReduxStoreToProps)(ReviewCard);