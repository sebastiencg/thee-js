import * as THREE from 'three';
import terreTexture from "../src/assets/terre.jpg";
import backgroundTexture from "../src/assets/backroound.jpeg";
import moonTexture from "../src/assets/moon.jpg";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const textureTerre = textureLoader.load(terreTexture);
const textureBackground = textureLoader.load(backgroundTexture);
const textureMoon = textureLoader.load(moonTexture);


const sphereGeometry = new THREE.SphereGeometry(50, 32, 16);
const basicMaterial = new THREE.MeshBasicMaterial({
  map: textureTerre
});
const sphere = new THREE.Mesh(sphereGeometry, basicMaterial);
//scene.add(sphere);

const moonGeometry = new THREE.SphereGeometry(50, 32, 16);
const moonMaterial = new THREE.MeshBasicMaterial({
  map: textureMoon
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);

const backgroundGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const backgroundMaterial = new THREE.MeshBasicMaterial({
  map: textureBackground,
  side: THREE.BackSide // Assure que la texture est visible de l'intérieur du cube
});

const backgroundCube = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundCube);

camera.position.z = 100;

let rotateSphere = true

window.addEventListener('click', onMouseClick, false);

function onMouseClick(event) {
  // Calcule les coordonnées normalisées du clic de la souris
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  // Raycaster pour détecter les intersections avec les objets 3D
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  // Recherche des intersections
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    console.log('Objet cliqué!')
    /*if (rotateSphere) {
      rotateSphere = false;
      camera.position.z = 20;

    } else {
      rotateSphere = true;
      camera.position.z = 34;

    }*/

  }
}

function animate() {

  requestAnimationFrame(animate);

  if (rotateSphere) {
    sphere.rotation.y += 0.0015;
  }

  renderer.render(scene, camera);
}

export  default animate()
