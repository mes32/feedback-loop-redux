import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

    // Request to flag/unflag a feedback entry on the server (via route PUT /prime-feedback/:id)
    flagFeedback = (feedback) => {
        const id = feedback.id;
        axios({
            method: 'PUT',
            url: `/prime-feedback/${id}`,
        }).then((response) => {
            this.getFeedback();
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
        if (window.confirm(dialog)) {
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
            <AdminFeedbackRow key={feedback.id} feedback={feedback} flagFeedback={this.flagFeedback} deleteFeedback={this.deleteFeedback} />
        );
    }

    // Display component on page
    render() {
        return (
            <div>
                <Header heading="Admin Review" subHeading="Feedback Results" />
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Comprehension</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Flag</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.displayFeebackArray()}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

export default connect()(AdminReview);