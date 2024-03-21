import App from "./App.jsx";

// Déclarer des variables pour stocker les positions précédentes de la souris
let mouseX = 0;
let mouseY = 0;

// Indique si le bouton gauche de la souris est enfoncé ou non
let leftMouseDown = false;

// Ajouter des écouteurs d'événements pour détecter les mouvements de la souris, le clic gauche enfoncé et le relâchement du clic gauche
window.addEventListener('mousemove', onMouseMove, false);
window.addEventListener('mousedown', onMouseDown, false);
window.addEventListener('mouseup', onMouseUp, false);

function onMouseMove(event) {
  if (leftMouseDown) {
    // Calcule le changement de position de la souris par rapport à sa position précédente
    const deltaX = event.clientX - mouseX;
    const deltaY = event.clientY - mouseY;

    // Mettre à jour les positions précédentes de la souris avec les nouvelles positions
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Déplacer la caméra en fonction du changement de position de la souris
    camera.position.x += deltaX * 0.05; // Ajustez la sensibilité de déplacement selon vos besoins
    camera.position.y -= deltaY * 0.05; // Inversez la direction pour correspondre à la logique des coordonnées de la caméra

    // Mettre à jour la cible de la caméra pour qu'elle regarde toujours le centre de la scène
    camera.lookAt(scene.position);
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
