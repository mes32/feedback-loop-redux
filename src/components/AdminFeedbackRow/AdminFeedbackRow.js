import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import React, { Component } from 'react';

class AdminFeedbackRow extends Component {

    // Call deleteFeedback() in AdminReview on the current feedback item
    delete = () => {
        const feedback = this.props.feedback;
        this.props.deleteFeedback(feedback);
    }

    // Display component on page
    render() {
        const feedback = this.props.feedback;
        return (
            <TableRow>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell><Button onClick={this.delete}>Delete</Button></TableCell>
            </TableRow>
        );
    }
}

export default AdminFeedbackRow;