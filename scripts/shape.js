import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { VertexNormalsHelper } from 'https://unpkg.com/three@0.119.0/examples/jsm/helpers/VertexNormalsHelper.js';
import vShader from './shaders/vertexShader.glsl.js';
import fShader from './shaders/fragmentShader.glsl.js';
import scene from './base.js';

let geometry = new THREE.IcosahedronGeometry(6, 4);
let material = new THREE.ShaderMaterial({
  visible: false,
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms:{
    time: { value: 1.0 },
    resolution: {value: new THREE.Vector2},
    color: {value: new THREE.Color('red')},
    displacement: {value: 0.5}
  }
})
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
mesh.position.y = 10;



export default mesh;
