import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import AdminReview from '../AdminReview/AdminReview.js';
import Comments from '../Comments/Comments.js';
import Confirmation from '../Confirmation/Confirmation.js'
import Feelings from '../Feelings/Feelings.js';
import Header from '../Header/Header.js';
import Review from '../Review/Review.js';
import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            {/* Links */}
            <p>
              [<Link to="/form-part-1">Part 1</Link>]
              [<Link to="/form-part-2">Part 2</Link>]
              [<Link to="/form-part-3">Part 3</Link>]
              [<Link to="/form-part-4">Part 4</Link>]
              [<Link to="/form-review">Review</Link>]
              [<Link to="/admin">Admin</Link>]
            </p>

            {/* Routes */}
            <Route exact path="/" component={Feelings} />
            <Route exact path="/form-part-1" component={Feelings} />
            <Route exact path="/form-part-2" component={Understanding} />
            <Route exact path="/form-part-3" component={Support} />
            <Route exact path="/form-part-4" component={Comments} />
            <Route exact path="/form-confirmation" component={Confirmation} />
            {/* <Route exact path="/form-review" component={Review} /> */}
            <Route exact path="/admin" component={AdminReview} />
            <Review history={this.props.history} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
