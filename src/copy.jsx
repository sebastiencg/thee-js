import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Importer OrbitControls

import terreTexture from "../src/assets/terre.jpg";
import backgroundTexture from "../src/assets/backroound.jpeg";
import moonTexture from "../src/assets/moon.jpg";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const textureLoader = new THREE.TextureLoader();
const textureTerre = textureLoader.load(terreTexture);
const textureBackground = textureLoader.load(backgroundTexture);
const textureMoon = textureLoader.load(moonTexture);

const terreGroup = new THREE.Group();
scene.add(terreGroup);

const sphereGeometry = new THREE.SphereGeometry(5, 320, 160);
const basicMaterial = new THREE.MeshBasicMaterial({ map: textureTerre });
const terre = new THREE.Mesh(sphereGeometry, basicMaterial);
terreGroup.add(terre);

const moonGeometry = new THREE.SphereGeometry(1.5, 320, 160);
const moonMaterial = new THREE.MeshBasicMaterial({ map: textureMoon });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 10;
terreGroup.add(moon);

const backgroundGeometry = new THREE.BoxGeometry(1000, 1000, 1200);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: textureBackground, side: THREE.BackSide });
const backgroundCube = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundCube);

camera.position.z = 400;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance=7
controls.maxDistance=800

let rotateSphere = true;

function animate() {
  requestAnimationFrame(animate);

  if (rotateSphere) {
    terreGroup.rotation.y += 0.0020;
    terre.rotation.y +=0.0040
  }

  controls.update();

  renderer.render(scene, camera);
}

animate();
export  default  animate()
