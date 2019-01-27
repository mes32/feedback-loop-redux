import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AdminReview from '../AdminReview/AdminReview.js';
import Comments from '../Comments/Comments.js';
import Confirmation from '../Confirmation/Confirmation.js'
import Feeling from '../Feeling/Feeling.js';
import Review from '../Review/Review.js';
import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/form-part-1" component={Feeling} />
            <Route exact path="/form-part-2" component={Understanding} />
            <Route exact path="/form-part-3" component={Support} />
            <Route exact path="/form-part-4" component={Comments} />
            <Route exact path="/form-review" component={Review} />
            <Route exact path="/form-confirmation" component={Confirmation} />
            <Route exact path="/admin" component={AdminReview} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
