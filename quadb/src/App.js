import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BrowseEvents from './components/pages/BrowseEvents';
import AddEvent from './components/pages/AddEvent';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BrowseEvents}/>
          <Route exact path="/add_event" component={AddEvent}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
