import React, { Component } from 'react';
import Three from 'three.js';
import dat from '../utils/dat.gui'

class MagicCube extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.demo();
    }

    demo() {

        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-40, 30, 40);
        camera.lookAt(scene.position);

        let renderer = new Three.WebGLRenderer();
        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(window. innerWidth, window.innerHeight);
        renderer.shadowMapEnabled = true;
        this.dom.appendChild(renderer.domElement);

        let ambientLight = new Three.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        let spotLight = new Three.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);

        // 添加一个平面
        let planeGeometry = new Three.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new Three.MeshLambertMaterial({color: 0xffffff});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);
        plane.position.set(0, -8, 0);
        plane.rotation.x = -0.5*Math.PI;
        scene.add(plane);


        let arrMatrial = [
            new Three.MeshBasicMaterial({color: 0x009e60}),
            new Three.MeshBasicMaterial({color: 0x0051ba}),
            new Three.MeshBasicMaterial({color: 0xffd500}),
            new Three.MeshBasicMaterial({color: 0xff5800}),
            new Three.MeshBasicMaterial({color: 0xc41e3a}),
            new Three.MeshBasicMaterial({color: 0xffffff})
        ];

        let faceMaterial = new Three.MeshFaceMaterial(arrMatrial);
        // let cube = new Three.Mesh(cubeGeometry, faceMaterial);
        // cube.position.set(0, 4, 0);
        // scene.add(cube);
        let container = new Three.Object3D();

        for(let x=0; x<3; x++) {
            let layer = new Three.Object3D();
            for(let y=0; y<3; y++) {
                for(let z=0; z<3; z++) {
                    let cubeGeometry = new Three.CubeGeometry(2.9, 2.9, 2.9);
                    let cube = new Three.Mesh(cubeGeometry, faceMaterial); 
                    cube.position.set(x*3-3, y*3-3, z*3-3);
                    layer.add(cube);
                }
            }
            container.add(layer);
        }

        scene.add(container);
        let render = () => {
            container.rotation.x += 0.01;
            container.children[0].rotation.x -= 0.01*Math.PI;
            container.children[1].rotation.x += 0.01;
            container.children[2].rotation.x -= 0.02;

            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        let controls = new function() {
            this.frontLeft = function() {
                
            };
            this.frontRight = function() {

            };
            this.behindLeft = function() {

            };
            this.behindRight = function() {

            };
            this.leftTop = function() {

            };
            this.leftBottom = function() {

            };
            this.rightTop = function() {

            };
            this.rightBottom = function() {

            };
            this.topLeft = function() {

            };
            this.topRight = function() {

            };
            this.bottomLeft = function() {

            };
            this.bottomRight = function() {

            };
        }

        let gui = new dat.GUI();
        gui.add(controls, 'frontLeft');
        gui.add(controls, 'frontRight');
        gui.add(controls, 'behindLeft');
        gui.add(controls, 'behindRight');
        gui.add(controls, 'leftTop');
        gui.add(controls, 'leftBottom');
        gui.add(controls, 'rightTop');
        gui.add(controls, 'rightBottom');
        gui.add(controls, 'topLeft');
        gui.add(controls, 'topRight');
        gui.add(controls, 'bottomLeft');
        gui.add(controls, 'bottomRight');
        render();
    }
    
    render() {
        return (
            <div>
                <div>
                    <div id="stats-output" ref={(dom) => this.statsDom = dom}></div>
                    <div ref={(dom) => this.dom = dom}></div>
                </div>
            </div>
        );
    }
}

export default MagicCube;
