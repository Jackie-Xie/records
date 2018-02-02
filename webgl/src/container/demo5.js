import React, { Component } from 'react';
import Stats from '../utils/stats';
import Three from 'three.js';
import dat from '../utils/dat.gui'

class C2Demo1 extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.demo();
    }

    dom = ''
    statsDom = ''
    demo() {
        let scene = new Three.Scene();

        let camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene.add(camera);
        
        let renderer = new Three.WebGLRenderer();

        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new Three.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new MeshLambertMaterial({color: 0xffffff});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        let ambientLight = new Three.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        let spotLight = new Three.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        this.dom.appendChild(renderer.domElement);

        let controls = new function() {
            this.rotationSpeed = 0.02;
            this.len = scene.children.length;

            this.removeCube = function() {
                let allChildren = scene.children;
                let lastOne = scnen.children[allChildren.length - 1];
                if (lastObject instanceof Three.Mesh) {
                    scene.remove(lastObejct);
                    this.len = scene.children.length;
                }
            }

            this.addCube = function() {
                let size = Math.ceil(Math.random() * 3);
                let boxGeometry = new Three.BoxGeometry(size, size, size);
                let boxMaterial = new Three.MeshLambertMaterial({color: Math.random() * 0xffffff});
                let cube = new Three.mesh(boxGeometry, boxMaterial);
                cube.castShadow = true;
            }
        }
        let gui = new dat.GUI();
        gui.add(controls, 'rotationSpeed', 0, 0.5);
       // gui.add(controls, )

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

export default Demo4;