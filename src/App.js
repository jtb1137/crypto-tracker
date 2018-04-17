import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import List from './components/list/List';
import NotFound from './components/notfound/NotFound';
import Detail from './components/detail/Detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/" component={List} exact />
            <Route path="/currency/:id" component={Detail} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
