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
            <tr>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><button onClick={this.delete}>Delete</button></td>
            </tr>
        );
    }
}

export default AdminFeedbackRow;