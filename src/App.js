import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    let pageSize = 6;
    
    let apiKey = process.env.REACT_APP_NEWS_API
    let country = "us";

    return (
      <div>
        <Router>
            <LoadingBar
            height={2}
            color='#f11946'
            progress={this.state.progress}
            />
            <Navbar/>
            <Switch>
              <Route exact path="/"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="general" /></Route>
              <Route exact path="/technology"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="technology" /></Route>
              <Route exact path="/sports"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="sports" /></Route>
              <Route exact path="/science"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="science" /></Route>
              <Route exact path="/health"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="health" /></Route>
              <Route exact path="/general"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="general" /></Route>
              <Route exact path="/business"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="business" /></Route>
              <Route exact path="/entertainment"><News setProgress={this.setProgress} country={country} pageSize={pageSize} apiKey={apiKey} category="entertainment" /></Route>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App
