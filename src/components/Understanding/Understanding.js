import React from 'react';
import RatingInput from '../RatingInput/RatingInput.js';

// Prompts the user to rate their level of understanding
function Understanding(props) {
    const prompt = 'How well are you understanding the content?';
    const actionType = 'SET_UNDERSTANDING';
    const nextURL = '/form-part-3';

    return <RatingInput history={props.history} prompt={prompt} actionType={actionType} nextURL={nextURL} />;
}

export default Understanding;