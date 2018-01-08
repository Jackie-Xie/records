import React, { Component } from 'react';
import Three from 'three.js'

class Demo1 extends Component {
    constructor(props) {
        super(props)
    }

    dom = ''

    componentDidMount() {
        let { width, height } = this.dom.style;
        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, this.dom.style.width, this.dom.style.height, 0.1, 1000);
        let renderer = new Three.WebGLRenderer();

        renderer.setClearColorHex(0xEEEEEE);
        renderer.setSize(width, height);
    }

    render() {
        return(
            <div className="container" ref={(dom) => this.dom = dom}></div>
        )
    }
}

export default Demo1;