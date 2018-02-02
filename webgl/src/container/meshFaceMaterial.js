import Three from 'three.js';
import React, { Component } from 'react';
import Stats from '../utils/stats';
import dat from '../utils/dat.gui';

class meshFaceMaterialDemo extends Component {
    constructor(props) {
        super(props);
    }

    dom = ''
    statsDom = ''

    componentDidMount() {
        this.demo();
    }

    demo() {
        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-30, 40, 30);
        camera.lookAt(scene.position);
        let renderer = new Three.WebGLRenderer();
        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new Three.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new Three.MeshLambertMaterial({color: 0xffffff});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);
        plane.recieveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.set(0, 0, 0);

        scene.add(plane);

        let ambientLight = new Three.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        let spotLight = new Three.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        let arrMaterial = [
            new Three.MeshBasicMaterial({color: 0x009e60}),
            new Three.MeshBasicMaterial({color: 0x0051ba}),
            new Three.MeshBasicMaterial({color: 0xffd500}),
            new Three.MeshBasicMaterial({color: 0xff5800}),
            new Three.MeshBasicMaterial({color: 0xc41e3a}),
            new Three.MeshBasicMaterial({color: 0xffffff})
        ];




        let cubeGeometry = new Three.CubeGeometry(4, 4, 4);
        //let cubeMaterial = new Three.MeshLambertMaterial({color: 0xff0000});
        let cubeMaterial = new Three.MeshFaceMaterial(arrMaterial)
        let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        cube.position.set(-4, 4, 0);

        scene.add(cube);

        this.dom.appendChild(renderer.domElement);
        renderer.render(scene, camera);

        let render = () => {
            
            cube.rotation.x += 0.02;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        render();

    }

    render() {
        return (
            <div>
                <div id="stats-output" ref={(dom) => this.statsDom = dom}></div>
                <div className="container" ref={(dom) => this.dom = dom}></div>
            </div>
        )
    }
}

export default meshFaceMaterialDemo;