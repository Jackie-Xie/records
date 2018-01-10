import React, { Component } from 'react';
import './App.css';
import Demo1 from './container/demo1';
import Detector from './utils/detector'


class App extends Component {
  render() {
    return (
      <div className="App">
       { Detector.webgl ? <Demo1 /> : <Warning />}
      </div>
    );
  }
}

class Warning extends Component {
  dom = ''
  componentDidMount() {
    var warning = Detector.getWebGLErrorMessage();
    this.dom.appendChild(warning);
  }
  
  render() {
    return (
      <div ref={(dom) => this.dom = dom}>
      
      </div>
    )
  }
}

export default App;
