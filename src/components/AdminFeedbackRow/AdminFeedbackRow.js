import DeleteIcon from '@material-ui/icons/Delete';
import FlagIcon from '@material-ui/icons/Flag';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import React, { Component } from 'react';

import './AdminFeedbackRow.css';

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

    // Determine the CSS class for this table row
    getRowClass = () => {
        if (this.props.feedback.flagged) {
            return "flagged";
        } else {
            return "unflagged";
        }
    }

    // Determine the color that should be used for the flag icon
    getFlagIconColor = () => {
        if (this.props.feedback.flagged) {
            return "secondary";
        } else {
            return "default";
        }
    }

    // Display component on page
    render() {
        const feedback = this.props.feedback;
        return (
            <TableRow className={this.getRowClass()}>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell>
                    <IconButton onClick={this.flag} color={this.getFlagIconColor()} aria-label="Flag">
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