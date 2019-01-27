import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

// Shows the admin page
class AdminReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackArray: [],
        };
    }

    // Will run after the page mounts
    componentDidMount() {
        // this.getFeedback();
    }

    // Request all user feedback from the server (via route GET /prime-feedback)
    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/prime-feedback',
        }).then((response) => {
            this.setState({
                feedbackArray: response.data,
            });
        }).catch((error) => {
            const errorMessage = `Server error: ${error}`;
            console.log(errorMessage);
            alert(errorMessage);
        })
    }

    // Convert the feedback array into JSX so that it can be displayed on the 
    // page.
    displayFeebackArray = () => {
        return this.state.feedbackArray.map((feedback) => {
            return (
                <tr key={feedback.id}>
                    <td>{feedback.feeling}</td>
                    <td>{feedback.understanding}</td>
                    <td>{feedback.support}</td>
                    <td>{feedback.comments}</td>
                </tr>
            );
        });
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header heading="Admin Review" subHeading="Feedback Results" />
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.displayFeebackArray()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect()(AdminReview);