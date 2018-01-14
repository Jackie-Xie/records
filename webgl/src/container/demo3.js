import React, { Component } from 'react';
import Three from 'three.js';

class Demo3 extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.demo3();
    }

    dom = ''

    demo3() {
        let {width, height} = getComputedStyle(this.dom);
        width = +width.slice(0, -2);
        height = +height.slice(0, -2);

        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);
        let renderer = new Three.WebGLRenderer();

        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(width, height);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new Three.PlaneGeometry(60, 20)
        let planeMaterial = new Three.MeshLambertMaterial({color: 0xffffff});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);

        let cubeGeometry = new Three.BoxGeometry(4, 4, 4);
        let cubeMaterial = new Three.MeshLambertMaterial({color: 0xff0000});
        let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
        scene.add(cube);

        let sphereGeometry = new Three.SphereGeometry(4, 20, 20);
        let sphereMaterial = new Three.MeshLambertMaterial({color: 0x7777ff});
        let sphere = new Three.Mesh(sphereGeometry, sphereMaterial);

        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;
        sphere.castShadow = true;
        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let spotLight = new Three.SpotLight(0x00ff00);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        this.dom.appendChild(renderer.domElement);
        renderer.render(scene, camera);
    }

    render() {
        return (
            <div>
                <div id="stats-output"></div>
                <div className="container" ref={(dom) => this.dom = dom}></div>
            </div>
        )
    }
}

export default Demo3;