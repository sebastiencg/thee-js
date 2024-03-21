import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Importer OrbitControls

import terreTexture from "../src/assets/terre.jpg";
import backgroundTexture from "../src/assets/backroound.jpeg";
import moonTexture from "../src/assets/moon.jpg";
import sunTexture from "../src/assets/sun.jpg";
import mercureTexture from "../src/assets/mercurymap.jpg"
import venusTexture from "../src/assets/Venus.jpg"
import marsTexture from "../src/assets/mars.jpg"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



const textureLoader = new THREE.TextureLoader();
const textureTerre = textureLoader.load(terreTexture);
const textureBackground = textureLoader.load(backgroundTexture);
const textureMoon = textureLoader.load(moonTexture);
const textureSun = textureLoader.load(sunTexture);
const textureMecure = textureLoader.load(mercureTexture);
const textureVenus = textureLoader.load(venusTexture);
const textureMars = textureLoader.load(marsTexture);


const sunGroup = new THREE.Group();

const sunMercureGroup = new THREE.Group();
const mercureGroup = new THREE.Group();

const sunVenusGroup = new THREE.Group();
const venusGroup = new THREE.Group();

const sunTerreGroup = new THREE.Group();
const terreGroup = new THREE.Group();

const sunMarsGroup = new THREE.Group();
const marsGroup = new THREE.Group();


mercureGroup.position.z=100
venusGroup.position.z=200
terreGroup.position.z= 320
marsGroup.position.z= 450

sunMercureGroup.add(mercureGroup)
sunVenusGroup.add(venusGroup)
sunTerreGroup.add(terreGroup)
sunMarsGroup.add(marsGroup)

sunGroup.add(sunTerreGroup,sunMercureGroup,sunVenusGroup,sunMarsGroup)
scene.add(sunGroup)

const sunGeometry = new THREE.SphereGeometry(60, 320, 160);
const sunMaterial = new THREE.MeshBasicMaterial({ map: textureSun });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const mercureGeometry = new THREE.SphereGeometry(5, 320, 160);
const mercureMaterial = new THREE.MeshBasicMaterial({ map: textureMecure });
const mercure = new THREE.Mesh(mercureGeometry, mercureMaterial);
mercureGroup.add(mercure)

const venusGeometry = new THREE.SphereGeometry(6, 320, 160);
const venusMaterial = new THREE.MeshBasicMaterial({ map: textureVenus });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venusGroup.add(venus)

const terreGeometry = new THREE.SphereGeometry(8, 320, 160);
const terreMaterial = new THREE.MeshBasicMaterial({ map: textureTerre });
const terre = new THREE.Mesh(terreGeometry, terreMaterial);
terreGroup.add(terre);

const moonGeometry = new THREE.SphereGeometry(1.5, 320, 160);
const moonMaterial = new THREE.MeshBasicMaterial({ map: textureMoon });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 10;
terreGroup.add(moon);

const marsGeometry = new THREE.SphereGeometry(6, 320, 160);
const marsMaterial = new THREE.MeshBasicMaterial({ map: textureMars });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
marsGroup.add(mars)

const backgroundGeometry = new THREE.BoxGeometry(1900, 1900, 2500);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: textureBackground, side: THREE.BackSide });
const backgroundCube = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundCube);




camera.position.z = 430;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance=7
controls.maxDistance=1500

let rotateSphere = true;

function animate() {
  requestAnimationFrame(animate);

  if (rotateSphere) {



    sunMercureGroup.rotation.y+=0.009
    mercure.rotation.y +=0.01

    sunVenusGroup.rotation.y+=0.007
    venus.rotation.y +=0.02

    sunTerreGroup.rotation.y +=0.0022
    terreGroup.rotation.y += 0.010;
    terre.rotation.y +=0.002

    sunMarsGroup.rotation.y+=0.0015
    mars.rotation.y +=0.0015
  }
  controls.update();

  renderer.render(scene, camera);
}

animate();
export  default  animate()
