import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import React, { Component } from 'react';

class AdminFeedbackRow extends Component {

    // Call flagFeedback() in AdminReview on the current feedback item
    flag = () => {
        const feedback = this.props.feedback;
        this.props.flagFeedback(feedback);
    }

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
                <TableCell>
                    <IconButton onClick={this.flag} aria-label="Flag">
                        <FlagIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton onClick={this.delete} aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

export default AdminFeedbackRow;