import React, { Component } from 'react';
import './App.css';
import Demo1 from './container/demo1';
import Demo2 from './container/demo2';
import Demo3 from './container/demo3';
import Detector from './utils/detector';
import MeshMaterialDemo from './container/meshFaceMaterial';
import MagicCube from './container/magicCube';

class App extends Component {
  render() {
    return (
      <div className="App">
        {Detector.webgl ? <MagicCube /> : <Warning />}
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
