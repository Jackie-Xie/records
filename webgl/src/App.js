import React, { Component } from 'react';
import './App.css';
import Demo1 from './container/demo1';
import Demo2 from './container/demo2';
import Demo3 from './container/demo3';
import Demo4 from './container/demo4';
import Detector from './utils/detector'


class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
       { Detector.webgl ? <Demo4 /> : <Warning />}
=======
        {Detector.webgl ? <Demo4 /> : <Warning />}
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
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
