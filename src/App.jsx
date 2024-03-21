import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Importer OrbitControls

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

animate();
export  default  animate()
