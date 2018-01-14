import React, { Component } from 'react';
import Three from 'three.js'
import Stats from '../utils/stats'
import dat from '../utils/dat.gui'

class Demo1 extends Component {
    constructor(props) {
        super(props)
    }

    dom = ''
    statsDom = ''

    componentDidMount() {
        //this.demo1();
        //this.drawingLines();
        this.drawPlane();
    }

    /** 
     * @desc quick start 
    */
    demo1() {
        let {
            width,
            height
        } = getComputedStyle(this.dom);
        width = +width.slice(0, -2);
        height = +height.slice(0, -2);
        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);
        let renderer = new Three.WebGLRenderer();
        renderer.setSize(width, height);
        this.dom.appendChild(renderer.domElement);

        let geometry = new Three.BoxGeometry(1, 1, 1);
        let material = new Three.MeshBasicMaterial({
            color: 0x00ff00
        });

        let cube = new Three.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        let animate = () => {
            requestAnimationFrame(animate);

            //cube.rotation.x += 0.04;
            cube.rotation.y += 0.04;
            cube.rotation.z += 0.04;

            renderer.render(scene, camera);
        }

        animate();
    }

    drawingLines() {
        let {
            width,
            height
        } = getComputedStyle(this.dom);
        width = +width.slice(0, -2);
        height = +height.slice(0, -2);
        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);
        let renderer = new Three.WebGLRenderer();
        renderer.setSize(width, height);
        this.dom.appendChild(renderer.domElement);

        camera.position.set(0, 0, 50);
        camera.lookAt(new Three.Vector3(0, 0, 0));

        let material = new Three.LineBasicMaterial({color: 0x0000ff});

        let geometry = new Three.Geometry();
        geometry.vertices.push(new Three.Vector3(-10, 0, 0));
        geometry.vertices.push(new Three.Vector3(0, 10, 0));
        geometry.vertices.push(new Three.Vector3(10, 0, 0));

        let line = new Three.Line(geometry, material);

        scene.add(line);
        renderer.render(scene, camera);
    }

    drawPlane() {
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

        let planeGeometry = new Three.PlaneGeometry(60, 40, 1, 1);
        let planeMaterial = new Three.MeshLambertMaterial({color: 0xffffff});
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

        renderer.render(scene, camera);

        let step = 0;

        let controls = new function() {
            this.rotationSpeed = 0.02;
            this.numberOfObject = scene.children.length;

            this.removeCube = function() {
                let allChildren = scene.children;
                let lastObject = allChildren[allChildren.length - 1];
                if (lastObject instanceof Three.Mesh) {
                    scene.remove(lastObject);
                }
            }
            
            this.addCube = function() {
                let cubeSize = Math.ceil((Math.random() * 3));
                let cubeGeometry = new Three.BoxGeometry(cubeSize, cubeSize, cubeSize);
                let cubeMaterial = new Three.MeshLambertMaterial({color: Math.random() * 0xffffff});
                let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
                cube.castShadow = true;
                cube.name = "cube-" + scene.children.length;

                cube.position.x = -30 + Math.round(Math.random() * planeGeometry.parameters.width);
                cube.position.y = Math.round(Math.random() * 5);
                cube.position.z = -20 + Math.round(Math.random() * planeGeometry.parameters.height);

                scene.add(cube);
                this.numberOfObjects = scene.children.length;
            }

            this.outputObjects = function() {
                console.log(scene.children);
            };

            this.numberOfObjects = scene.children.length;
        }

        let gui = new dat.GUI();
        gui.add(controls, 'rotationSpeed', 0, 0.5);
        gui.add(controls, 'addCube');
        gui.add(controls, 'removeCube');
        gui.add(controls, 'outputObjects');
        gui.add(controls, 'numberOfObjects').listen();

        let initStats = () => {
            var stats = new Stats();
            stats.setMode(0);
            this.statsDom.appendChild(stats.domElement);
            return stats;
        }

        let stats = initStats();

        function render() {
            stats.update();
            scene.traverse(function(e) {
                if (e instanceof Three.Mesh && e != plane) {
                    e.rotation.x += controls.rotationSpeed;
                    e.rotation.y += controls.rotationSpeed;
                    e.rotation.z += controls.rotationSpeed;
                }
            });

            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        render();
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

export default Demo1;