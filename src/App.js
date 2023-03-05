import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    let pageSize = 6;
    return (
      <div>
        <Navbar/>
          <Router>
            <Switch>
              <Route exact path="/"><News country="us" pageSize={pageSize} category="general" /></Route>
              <Route exact path="/technology"><News country="us" pageSize={pageSize} category="technology" /></Route>
              <Route exact path="/sports"><News country="us" pageSize={pageSize} category="sports" /></Route>
              <Route exact path="/science"><News country="us" pageSize={pageSize} category="science" /></Route>
              <Route exact path="/health"><News country="us" pageSize={pageSize} category="health" /></Route>
              <Route exact path="/general"><News country="us" pageSize={pageSize} category="general" /></Route>
              <Route exact path="/business"><News country="us" pageSize={pageSize} category="business" /></Route>
              <Route exact path="/entertainment"><News country="us" pageSize={pageSize} category="entertainment" /></Route>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App
