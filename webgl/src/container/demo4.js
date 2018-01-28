import React, { Component } from 'react';
<<<<<<< HEAD
import Three from 'three.js';

class Demo3 extends Component {
=======
import Stats from '../utils/stats';
import Three from 'three.js';

class Demo4 extends Component {
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.demo();
    }

    dom = ''
<<<<<<< HEAD

    demo() {
        let [width, height] = [window.innerWidth, window.innerHeight];

        let scene = new Three.Scene();
        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);
        let renderer = new Three.WebGLRenderer();

        renderer.setClearColor(0xeeeeee, 1.0);
        renderer.setSize(width, height);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new Three.PlaneGeometry(60, 20)
=======
    statsDom = ''
    demo() {
        let initStats = () => {
            let stats = new Stats();
            stats.setMode(0);
            this.statsDom.appendChild(stats.domElement);
            return stats;
        }
        let stats = initStats();

        let {width, height} = getComputedStyle(this.dom);
        width = +width.slice(0, -2);
        height = +height.slice(0, -2);

        let scene = new Three.Scene();

        let camera = new Three.PerspectiveCamera(45, width / height, 0.1, 1000);

        let renderer = new Three.WebGLRenderer();
        renderer.setClearColor(0xeeeeee, 1);
        renderer.setSize(width, height);
        renderer.shadowMapEnabled = true;

        let planeGeometry = new Three.PlaneGeometry(60, 20, 1, 1);
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
        let planeMaterial = new Three.MeshLambertMaterial({color: 0xffffff});
        let plane = new Three.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
<<<<<<< HEAD
=======

>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
        scene.add(plane);

        let cubeGeometry = new Three.BoxGeometry(4, 4, 4);
        let cubeMaterial = new Three.MeshLambertMaterial({color: 0xff0000});
        let cube = new Three.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;

        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
<<<<<<< HEAD
=======

>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
        scene.add(cube);

        let sphereGeometry = new Three.SphereGeometry(4, 20, 20);
        let sphereMaterial = new Three.MeshLambertMaterial({color: 0x7777ff});
        let sphere = new Three.Mesh(sphereGeometry, sphereMaterial);

        sphere.position.x = 20;
<<<<<<< HEAD
        sphere.position.y = 4;
        sphere.position.z = 2;
        sphere.castShadow = true;
=======
        sphere.position.y = 0;
        sphere.position.z = 2;
        sphere.castShadow = true;

>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

<<<<<<< HEAD
        var ambientLight = new Three.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        let spotLight = new Three.SpotLight(0xffffff);
        spotLight.position.set(-20, 30, -5);
        spotLight.castShadow = true;
        scene.add(spotLight);

        this.dom.appendChild(renderer.domElement);
        scene.fog = new Three.FogExp2(0xffffff, 0.015);

        let step = 0;
        function render() {
            step += 0.04;
            let x = 14 + (10 * Math.sin(step));
            sphere.position.x = x;
            sphere.position.y = 4 + (2 * Math.abs(Math.cos(step)));
            cube.rotation.x = Math.PI*step;
            cube.rotation.y = Math.PI*step;
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }

        render();

        function onResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onResize, false);

=======
        let ambientLight = new Three.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        let spotLight = new Three.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        scene.add(spotLight);
        
        this.dom.appendChild(renderer.domElement);

        let step = 0;
        let renderScene = () => {
            stats.update();

            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            cube.rotation.z += 0.02;

            step += 0.04;
            sphere.position.x = 20 + ( 10 * Math.cos(step) );
            sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));

            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }

        renderScene();
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <div id="stats-output"></div>
=======
                <div id="stats-output" ref={(dom) => this.statsDom = dom}></div>
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
                <div className="container" ref={(dom) => this.dom = dom}></div>
            </div>
        )
    }
}

<<<<<<< HEAD
export default Demo3;
=======
export default Demo4;
>>>>>>> a8eb015b6dda733d448ddbddde0201974fe8c1b4
