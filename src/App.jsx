import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Importer OrbitControls
import Swal from 'sweetalert2';


import terreTexture from "../src/assets/terre.jpg";
import backgroundTexture from "../src/assets/backroound.jpeg";
import moonTexture from "../src/assets/moon.jpg";
import sunTexture from "../src/assets/sun.jpg";
import mercureTexture from "../src/assets/mercurymap.jpg"
import venusTexture from "../src/assets/Venus.jpg"
import marsTexture from "../src/assets/mars.jpg"
import jupiterTexture from "../src/assets/jupiter.png"
import saturnTexture from "../src/assets/saturn.jpg"
import uranusTexture from "../src/assets/uranusmap.jpg"
import neptuneTexture from "../src/assets/neptunemap.jpg"
import plutonTexture from "../src/assets/plutomap1k.jpg"


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
const textureJupiter = textureLoader.load(jupiterTexture);
const textureSaturne = textureLoader.load(saturnTexture);
const textureUranus = textureLoader.load(uranusTexture);
const textureNeptune = textureLoader.load(neptuneTexture);
const texturePluton = textureLoader.load(plutonTexture);


const sunGroup = new THREE.Group();

const sunMercureGroup = new THREE.Group();
const mercureGroup = new THREE.Group();

const sunVenusGroup = new THREE.Group();
const venusGroup = new THREE.Group();

const sunTerreGroup = new THREE.Group();
const terreGroup = new THREE.Group();

const sunMarsGroup = new THREE.Group();
const marsGroup = new THREE.Group();

const sunJupiterGroup = new THREE.Group();
const jupiterGroup = new THREE.Group();

const sunSaturneGroup = new THREE.Group();
const saturneGroup = new THREE.Group();

const sunUranusGroup = new THREE.Group();
const uranusGroup = new THREE.Group();

const sunNeptuneGroup = new THREE.Group();
const neptuneGroup = new THREE.Group();

const sunPlutonGroup = new THREE.Group();
const plutonGroup = new THREE.Group();


mercureGroup.position.z=100
venusGroup.position.z=200
terreGroup.position.z= 320
marsGroup.position.z= 450
jupiterGroup.position.z= 590
saturneGroup.position.z= 690
uranusGroup.position.z= 790
neptuneGroup.position.z= 890
plutonGroup.position.z= 1000




sunMercureGroup.add(mercureGroup)
sunVenusGroup.add(venusGroup)
sunTerreGroup.add(terreGroup)
sunMarsGroup.add(marsGroup)
sunJupiterGroup.add(jupiterGroup)
sunSaturneGroup.add(saturneGroup)
sunUranusGroup.add(uranusGroup)
sunNeptuneGroup.add(neptuneGroup)
sunPlutonGroup.add(plutonGroup)



sunGroup.add(sunTerreGroup,sunMercureGroup,sunVenusGroup,sunMarsGroup,sunJupiterGroup,sunSaturneGroup,sunUranusGroup,sunNeptuneGroup,sunPlutonGroup)
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

const jupiterGeometry = new THREE.SphereGeometry(20, 320, 160);
const jupiterMaterial = new THREE.MeshBasicMaterial({ map: textureJupiter });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterGroup.add(jupiter)

const saturneGeometry = new THREE.SphereGeometry(12, 320, 160);
const saturneMaterial = new THREE.MeshBasicMaterial({ map: textureSaturne });
const saturn = new THREE.Mesh(saturneGeometry, saturneMaterial);
const ringSaturneGeometry = new THREE.RingGeometry(15, 25, 64);
const ringSaturneMaterial = new THREE.MeshBasicMaterial({ color: 0x9a9689, side: THREE.DoubleSide, opacity: 0.8, transparent: true });
const ringsSature = new THREE.Mesh(ringSaturneGeometry, ringSaturneMaterial);
ringsSature.rotation.x = Math.PI / 3;
ringsSature.position.set(0, 0, 0);
saturneGroup.add(saturn,ringsSature);

const uranusGeometry = new THREE.SphereGeometry(9, 320, 160);
const uranusMaterial = new THREE.MeshBasicMaterial({ map: textureUranus });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
const ringUranusGeometry = new THREE.RingGeometry(15, 25, 64);
const ringUranusMaterial = new THREE.MeshBasicMaterial({ color: 0xDBF0FD, side: THREE.DoubleSide, opacity: 0.08, transparent: true });
const ringsUranus = new THREE.Mesh(ringUranusGeometry, ringUranusMaterial);
ringsSature.rotation.x = Math.PI / 3;
ringsSature.position.set(0, 0, 0);
uranusGroup.add(uranus,ringsUranus);

const neptuneGeometry = new THREE.SphereGeometry(13, 320, 160);
const neptuneMaterial = new THREE.MeshBasicMaterial({ map: textureNeptune });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneGroup.add(neptune)

const plutonGeometry = new THREE.SphereGeometry(5, 320, 160);
const plutonMaterial = new THREE.MeshBasicMaterial({ map: texturePluton });
const pluton = new THREE.Mesh(plutonGeometry, plutonMaterial);
plutonGroup.add(pluton)



const backgroundGeometry = new THREE.BoxGeometry(2500, 2500, 3000);
const backgroundMaterial = new THREE.MeshBasicMaterial({ map: textureBackground, side: THREE.BackSide });
const backgroundCube = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundCube);



camera.position.z = 430;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance=80
controls.maxDistance=1650

let rotateSphere = true;
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  rotateSphere = !rotateSphere;
});


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

    sunMarsGroup.rotation.y+=0.0017
    mars.rotation.y +=0.0015

    sunJupiterGroup.rotation.y+=0.0013
    jupiter.rotation.y +=0.0008555

    sunSaturneGroup.rotation.y+=0.001111
    saturn.rotation.y +=0.0008555

    sunUranusGroup.rotation.y+=0.000965645
    uranus.rotation.y +=0.0008555

    sunNeptuneGroup.rotation.y+=0.000665645
    neptune.rotation.y +=0.0008555

    sunPlutonGroup.rotation.y+=0.000665645
    pluton.rotation.y +=0.0008555

  }
  controls.update();

  renderer.render(scene, camera);
}

function onMouseClick(event) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object === sun) {
      Swal.fire({
        title: 'Informations sur le soleil ',
        html: 'Le Soleil est l’étoile du Système solaire. Dans la classification astronomique, c’est une étoile de type naine jaune d\'une masse d\'environ 2 × 1030 kg, composée d’hydrogène (74 % de la masse ou 92 % du volume) et d’hélium (25 % de la masse ou 8 % du volume)',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }

    if (intersects[i].object === mercure) {
      Swal.fire({
        title: 'Informations sur mercure',
        html: 'Mercure est la planète la plus proche du Soleil et la moins massive du Système solaireN 1. Son éloignement du Soleil est compris entre 0,31 et 0,47 unité astronomique (soit 46 et 70 millions de kilomètres), ce qui correspond à une excentricité orbitale de 0,2 — plus de douze fois supérieure à celle de la Terre, et de loin la plus élevée pour une planète du Système solaire.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }
    if (intersects[i].object === venus) {
      Swal.fire({
        title: 'Informations sur venus',
        html: 'Vénus est la deuxième planète du Système solaire par ordre d\'éloignement au Soleil, et la sixième plus grosse aussi bien par la masse que le diamètre.\n' +
          '\n' +
          'Vénus orbite autour du Soleil tous les 224,7 jours terrestres. Avec une période de rotation de 243 jours terrestres, il lui faut plus de temps pour tourner autour de son axe que toute autre planète du Système solaire.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }
    if (intersects[i].object === terre) {
      Swal.fire({
        title: 'Informations sur la Terre',
        html: 'La Terre est la troisième planète par ordre d\'éloignement au Soleil et la cinquième plus grande du Système solaire aussi bien par la masse que par le diamètre. Par ailleurs, elle est le seul objet céleste connu pour abriter la vie. Elle orbite autour du Soleil en 365,256 jours solaires ',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }
    if (intersects[i].object === moon) {
      Swal.fire({
        title: 'Informations sur la lune',
        html: 'La Lune est l\'unique satellite naturel permanent de la planète Terre. Il s\'agit du cinquième plus grand satellite naturel du Système solaire, et du plus grand des satellites planétaires par rapport à la taille de la planète autour de laquelle il orbite. C\'est le deuxième satellite le plus dense du Système solaire après Io, un satellite de Jupiterc.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }
    if (intersects[i].object === mars) {
      Swal.fire({
        title: 'Informations sur mars',
        html: 'Mars (prononcé en français : /maʁs/) est la quatrième planète du Système solaire par ordre croissant de la distance au Soleil et la deuxième par ordre croissant de la taille et de la masse. Son éloignement au Soleil est compris entre 1,381 et 1,666 au (206,6 à 249,2 millions de kilomètres), elle a une période orbitale de 669,58 jours martiens (686,71 jours ou 1,88 année terrestre).',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });
    }
    if (intersects[i].object === jupiter) {
      Swal.fire({
        title: 'Informations sur jupiter',
        html: 'Jupiter est la cinquième planète du Système solaire par ordre d\'éloignement au Soleil, et la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse. Elle est même plus volumineuse que toutes les autres planètes réunies avec son rayon moyen de 69 911 km, qui vaut environ onze fois celui de la Terre, et sa masse de 1,898 × 1027 kg, qui est 318 fois plus grande. Orbitant en moyenne à environ 779 millions de kilomètres du Soleil (5,2 unités astronomiques), sa période de révolution vaut un peu moins de 12 ans.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });

    }
    if (intersects[i].object === saturn) {
      Swal.fire({
        title: 'Informations sur saturn',
        html: 'Saturne est la sixième planète du Système solaire par ordre d\'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse. Son rayon moyen de 58 232 km est environ neuf fois et demi celui de la Terre et sa masse de 568,46 × 1024 kg est 95 fois plus grande. Orbitant en moyenne à environ 1,4 milliard de kilomètres du Soleil (9,5 unités astronomiques), sa période de révolution vaut un peu moins de 30 années terrestres tandis que sa période de rotation est estimée à 10 h 33 min.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });

    }
    if (intersects[i].object === uranus) {
      Swal.fire({
        title: 'Informations sur uranus',
        html: 'Uranus est la septième planète du Système solaire par ordre d\'éloignement du Soleil. Elle orbite autour de celui-ci à une distance d\'environ 19,2 unités astronomiques (2,87 milliards de kilomètres), avec une période de révolution de 84,05 années terrestres. Il s\'agit de la quatrième planète la plus massive du Système solaire et de la troisième plus grande par la taille.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });

    }
    if (intersects[i].object === neptune) {
      Swal.fire({
        title: 'Informations sur neptune',
        html: 'Neptune est la huitième planète par ordre d\'éloignement au Soleil et la plus éloignée connue du Système solaireN 2. Elle orbite autour du Soleil à une distance d\'environ 30,1 au (4,5 milliards de kilomètres), avec une excentricité orbitale moitié moindre que celle de la Terre et une période de révolution de 164,79 ans. Il s\'agit de la troisième planète la plus massive du Système solaire et de la quatrième plus grande par la taille — un peu plus massive mais un peu plus petite qu\'Uranus. Par ailleurs, elle est la planète géante la plus dense.',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });

    }
    if (intersects[i].object === pluton) {
      Swal.fire({
        title: 'Informations sur pluton',
        html: 'Pluton, officiellement désignée par (134340) Pluton (désignation internationale : (134340) Pluto), est une planète naine, la plus volumineuse connue dans le Système solaire (2 372 km de diamètre, contre 2 326 km pour Éris), et la deuxième en ce qui concerne sa masse (après Éris). Pluton est ainsi le neuvième plus gros objet connu orbitant directement autour du Soleil et le dixième par la masse. ',
        icon: 'info',
        confirmButtonText: 'Fermer'
      });

    }

  }
}

window.addEventListener('click', onMouseClick, false);


animate();
export  default  animate()
