import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Feelings from '../Feelings/Feelings.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <div>
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
            <Route exact path="/form-part-1" component={Feelings} />
            {/* <Route exact path="/form-part-2" component={Understanding} />
            <Route exact path="/form-part-3" component={Support} />
            <Route exact path="/form-part-4" component={Comments} />
            <Route exact path="/form-review" component={Review} />
            <Route exact path="/admin" component={AdminReview} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
