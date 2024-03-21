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

// Création d'un groupe pour la Terre et la Lune
const terreGroup = new THREE.Group();
scene.add(terreGroup);

// Terre
const sphereGeometry = new THREE.SphereGeometry(50, 32, 16);
const basicMaterial = new THREE.MeshBasicMaterial({
  map: textureTerre
});

const terre = new THREE.Mesh(sphereGeometry, basicMaterial);
terreGroup.add(terre);

// Lune
const moonGeometry = new THREE.SphereGeometry(15, 32, 16); // Réduire la taille de la lune
const moonMaterial = new THREE.MeshBasicMaterial({
  map: textureMoon
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 100; // Positionner la lune à droite de la terre
terreGroup.add(moon);

// Fond
const backgroundGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const backgroundMaterial = new THREE.MeshBasicMaterial({
  map: textureBackground,
  side: THREE.BackSide
});
const backgroundCube = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundCube);

camera.position.z = 400; // Ajuster la position de la caméra pour voir les deux objets

let rotateSphere = true;

// Déclarer des variables pour stocker les positions précédentes de la souris
let mouseX = 0;
let mouseY = 0;

// Indique si le bouton gauche de la souris est enfoncé ou non
let leftMouseDown = false;

// Ajouter des écouteurs d'événements pour détecter les mouvements de la souris, le clic gauche enfoncé et le relâchement du clic gauche
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mouseup', onMouseUp, false);

console.log(camera.position.y)
console.log(camera.position.x)
console.log(camera.position.z)

function onMouseMove(event) {
  if (leftMouseDown) {
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;

// Mettre à jour les positions précédentes de la souris avec les nouvelles positions
    mouseX = event.clientX;
    mouseY = event.clientY;

// Calculer le déplacement relatif de la caméra
    const moveX = deltaX * 0.9; // Ajustez la sensibilité de déplacement horizontale selon vos besoins
    const moveY = deltaY * 0.9; // Ajustez la sensibilité de déplacement verticale selon vos besoins

// Déplacer la caméra en fonction du déplacement de la souris, sans changer sa position z
    camera.position.x += moveX;
    camera.position.y -= moveY;

// Mettre à jour la cible de la caméra pour qu'elle regarde toujours le centre de la scène
    camera.lookAt(scene.position);

    console.log(camera.position.y)
    console.log(camera.position.x)
    console.log(camera.position.z)
  }
}

function onMouseDown(event) {
  if (event.button === 0) { // Vérifie si le clic est le clic gauche (0 pour le clic gauche)
    leftMouseDown = true;

    // Mettre à jour les positions précédentes de la souris
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
}

function onMouseUp(event) {
  if (event.button === 0) { // Vérifie si le clic est le clic gauche (0 pour le clic gauche)
    leftMouseDown = false;
  }
}

// Fonction pour détecter les clics de souris
function onMouseClick(event) {
  // Raycaster pour détecter les intersections avec les objets 3D
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  // Calcule les coordonnées normalisées du clic de la souris
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  // Met à jour le rayon de la souris
  raycaster.setFromCamera(mouse, camera);

  // Recherche des intersections avec les objets de la scène
  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    console.log('Objet cliqué!');
  }
}

// Ajouter un écouteur d'événement pour détecter les clics de souris
window.addEventListener('click', onMouseClick, false);


function animate() {
  requestAnimationFrame(animate);

  if (rotateSphere) {
    terreGroup.rotation.y += 0.0015; // Fait tourner le groupe Terre-Lune
  }

  renderer.render(scene, camera);
}


export  default animate()
