import React from 'react';
import RatingInput from '../RatingInput/RatingInput.js';

// Prompts the user to rate their feelings of support
function Support(props) {
    const prompt = 'How well are you being supported?';
    const actionType = 'SET_SUPPORT';
    const nextURL = '/form-part-4';

    return <RatingInput history={props.history} prompt={prompt} actionType={actionType} nextURL={nextURL} />;
}

export default Support;