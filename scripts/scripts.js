import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { RGBELoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';
import {canvas, renderer, scene, camera, control} from './base.js'
import mesh from './shape.js';


const spheres = [];

for (let i = 0; i < mesh.geometry.vertices.length; i++)
{
  let verticesVector = mesh.geometry.vertices[i];
  let geometry = new THREE.SphereGeometry(0.05, 1, 1);
  let material = new THREE.MeshStandardMaterial({color: 'green'});
  let sphere = new THREE.Mesh(geometry, material);
  let position = verticesVector;

  sphere.position.set(position.x, position.y, position.z);
  spheres.push(sphere);
}

let i = 0;
let speed = 10;
const loop = () =>
{
  for (let i = 0; i < spheres.length; i++)
  {
    spheres[i].rotation.x += 0.05;
    spheres[i].rotation.y += 0.04;
  }
  if (i >= spheres.length) {

  }
  else
  {
    let x = spheres.slice(i, i+speed)
    for (let i = 0; i < x.length; i++)
    {
      scene.add(x[i]);
    }

    i = i+speed;
  }
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}
loop()
