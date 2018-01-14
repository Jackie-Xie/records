import React, { Component } from 'react';
import Three from 'three.js'
import Stats from '../utils/stats'
import dat from '../utils/dat.gui'

class Demo2 extends Component {
    constructor(props) {
        super(props)
    }

    dom = ''
    statsDom = ''

    componentDidMount() {
        this.demo2();
    }

    demo2() {
        let {
            width,
            height
        } = getComputedStyle(this.dom);
        width = +width.slice(0, -2);
        height = +height.slice(0, -2);

        let scene = new Three.Scene();

        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);
        scene.add(camera);

        let renderer = new Three.WebGLRenderer();
        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(width, height);
        renderer.shadowMapEnabled = true;
        this.dom.appendChild(renderer.domElement);

        let axes = new Three.AxisHelper(20);
        scene.add(axes);

        let planeGeometry = new Three.PlaneGeometry(60, 20);
        let planeMaterial = new Three.MeshBasicMaterial({color: 0xcccccc});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        let cubeGeometry = new Three.BoxGeometry(4, 4, 4);
        let cubeMaterial = new Three.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        let cube = new Three.Mesh(cubeGeometry, cubeMaterial);

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;

        scene.add(cube);

        let sphereGeometry = new Three.SphereGeometry(4, 20, 20);
        let sphereMaterial = new Three.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
        let sphere = new Three.Mesh(sphereGeometry, sphereMaterial);

        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 0;

        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    render() {
        return(
            <div>
                <div id="stats-output" ref={(dom) => this.statsDom = dom}></div>
                <div className="container" ref={(dom) => this.dom = dom}></div>
            </div>
        )
    }
}

export default Demo2;