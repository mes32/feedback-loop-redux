import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminFeedbackRow from '../AdminFeedbackRow/AdminFeedbackRow.js';
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
        this.getFeedback();
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
        });
    }

    // Request to delete a feedback entry from the server (via route DELETE /prime-feedback/:id)
    deleteFeedback = (feedback) => {
        const id = feedback.id;
        const dialog = `Are you sure?\nRemoving this feedback entry from the database cannot be undone.\nid = ${id}`;
        if (window.confirm(dialog, '11111111', '2222222')) {
            axios({
                method: 'DELETE',
                url: `/prime-feedback/${feedback.id}`,
            }).then((response) => {
                this.getFeedback();
            }).catch((error) => {
                const errorMessage = `Server error: ${error}`;
                console.log(errorMessage);
                alert(errorMessage);
            });
        }
    }

    // Maps the feedback array from JSON to AdminFeedbackRow components
    displayFeebackArray = () => {
        return this.state.feedbackArray.map((feedback) => 
            <AdminFeedbackRow key={feedback.id} feedback={feedback} deleteFeedback={this.deleteFeedback} />
        );
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
                            <th>Delete</th>
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