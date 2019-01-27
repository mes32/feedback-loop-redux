import React from 'react';
import RatingInput from '../RatingInput/RatingInput.js';

// Prompts the user to rate their emotional state
function Feeling(props) {
    const prompt = 'How are you feeling today?';
    const actionType = 'SET_FEELING';
    const nextURL = '/form-part-2';

    return <RatingInput history={props.history} prompt={prompt} actionType={actionType} nextURL={nextURL} />;
}

export default Feeling;