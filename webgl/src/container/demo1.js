import React, { Component } from 'react';
import Three from 'three.js'

class Demo1 extends Component {
    constructor(props) {
        super(props)
    }

    dom = ''

    componentDidMount() {
        //this.demo1();
        this.drawingLines();
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

    render() {
        return(
            <div className="container" ref={(dom) => this.dom = dom}></div>
        )
    }
}

export default Demo1;