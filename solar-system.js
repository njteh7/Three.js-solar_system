//<reference path="libs/three.js"/>
//Author: Njthe Keledjian
//Date: January 10, 2020
//filename: solar-system.js

//declare recurring variable
let scene;
let renderer;
let camera;
let clock;
let trackballControl;
let mat = new THREE.MeshLambertMaterial({ color: 0x2dc829 });
let spotLight, pointLight;

let meshGroup;
let meshes;

let merSpeed = 0.02;
let venSpeed = 0.01;
let earSpeed = 0.0075;
let marSpeed = 0.0065;
let jupSpeed = 0.005;
let satSpeed = 0.004;
let uraSpeed = 0.0025;
let nepSpeed = 0.002;
let pluSpeed = 0.003;

let mercuryC = new THREE.Object3D();
let venusC = new THREE.Object3D();
let earthC = new THREE.Object3D();
let marsC = new THREE.Object3D();
let jupiterC = new THREE.Object3D();
let saturnC = new THREE.Object3D();
let uranusC = new THREE.Object3D();
let neptuneC = new THREE.Object3D();
let plutoC = new THREE.Object3D();

//define javascript functions
//int
function init() {
  //create the scene
  scene = new THREE.Scene();

  meshes = createMeshes();

  //create the renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });

  //set its size
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;
  renderer.physicallyCorrectLights = true;
  renderer.setClearColor(0x05174e);

  //add it to the DOM
  document.body.appendChild(renderer.domElement);
}

//createCameraAndLights
function createCameraAndLights() {
  //create the camera
  camera = new THREE.PerspectiveCamera(
    60, //camera angle
    window.innerWidth / window.innerHeight, //shape of the output
    0.1, //near point
    10000 //far point
  );
  //set its position
  camera.position.set(10, 100, 50);
  //point the camera
  camera.lookAt(scene.position);
  clock = new THREE.Clock(); //needed for the trackballControl
  trackballControl = new THREE.TrackballControls(camera, renderer.domElement);

  let ambLight = new THREE.AmbientLight(0x7e3fbc);
  scene.add(ambLight);
}

function createMaterials() {
  let sun = new THREE.MeshPhongMaterial({
    color: "yellow",
    emissive: "#F8CE3B",
  });

  let earth = new THREE.MeshPhongMaterial({
    color: 0x0f6ee3,
    emissive: 0x112244,
    flatShading: true,
  });

  let moon = new THREE.MeshPhongMaterial({
    emissive: "#191A0F",
    flatShading: true,
  });

  let mercury = new THREE.MeshPhongMaterial({
    color: 0xd4d4d4,
    emissive: 0x112244,
    flatShading: true,
  });

  let venus = new THREE.MeshPhongMaterial({
    color: 0xecca0a,
    flatShading: true,
  });

  let mars = new THREE.MeshPhongMaterial({
    color: 0xe69c08,
    flatShading: true,
  });

  let jupiter = new THREE.MeshPhongMaterial({
    color: 0xe1d956,
    flatShading: true,
  });

  let saturn = new THREE.MeshPhongMaterial({
    color: 0xeadc8f,
    flatShading: true,
  });

  let uranus = new THREE.MeshPhongMaterial({
    color: 0xb0dbdc,
    flatShading: true,
  });

  let neptune = new THREE.MeshPhongMaterial({
    color: 0x2fc5f0,
    flatShading: true,
  });

  let pluto = new THREE.MeshPhongMaterial({
    color: 0xeb9820,
    flatShading: true,
  });

  [
    sun,
    earth,
    moon,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto,
  ].forEach((m) => {
    m.color.convertSRGBToLinear();
  });

  return {
    sun,
    earth,
    moon,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,
    pluto,
  };
}

function createGeometries() {
  let sphere = new THREE.SphereBufferGeometry(1, 12, 12);
  return {
    sphere,
  };
}

function createMeshes() {
  let materials = createMaterials();
  let geometries = createGeometries();

  let sunMesh = new THREE.Mesh(geometries.sphere, materials.sun);
  sunMesh.scale.set(5, 5, 5);

  let earthMesh = new THREE.Mesh(geometries.sphere, materials.earth);
  earthMesh.rotation.x = Math.PI / 2 + Math.PI * 0.2;
  earthMesh.position.x = 30;

  let mercMesh = new THREE.Mesh(geometries.sphere, materials.mercury);
  mercMesh.rotation.x = Math.PI / 2 + Math.PI * 0.2;
  mercMesh.position.x = 14;
  mercMesh.scale.set(0.5, 0.5, 0.5);

  let venMesh = new THREE.Mesh(geometries.sphere, materials.venus);
  venMesh.rotation.x = Math.PI / 2 + Math.PI * 0.2;
  venMesh.position.x = 22;
  venMesh.scale.set(1, 1, 1);

  let marsMesh = new THREE.Mesh(geometries.sphere, materials.mars);
  marsMesh.rotation.x = Math.PI / 2 + Math.PI * 0.2;
  marsMesh.position.x = 40;

  let jupMesh = new THREE.Mesh(geometries.sphere, materials.jupiter);
  jupMesh.rotation.x = Math.PI / 2 + Math.PI * 0.2;
  jupMesh.position.x = 55;
  jupMesh.scale.set(2.5, 2.5, 2.5);

  let saturnMesh = new THREE.Mesh(geometries.sphere, materials.saturn);
  saturnMesh.scale.set(2, 2, 2);
  saturnMesh.position.x = 70;

  let uraMesh = new THREE.Mesh(geometries.sphere, materials.uranus);
  uraMesh.scale.set(1.1, 1.1, 1.1);
  uraMesh.position.x = 82;

  let nepMesh = new THREE.Mesh(geometries.sphere, materials.neptune);
  nepMesh.scale.set(1, 1, 1);
  nepMesh.position.x = 90;

  let pluMesh = new THREE.Mesh(geometries.sphere, materials.pluto);
  pluMesh.scale.set(0.5, 0.5, 0.5);
  pluMesh.position.x = 98;

  mercuryC.add(mercMesh);
  venusC.add(venMesh);
  earthC.add(earthMesh);
  marsC.add(marsMesh);
  jupiterC.add(jupMesh);
  saturnC.add(saturnMesh);
  uranusC.add(uraMesh);
  neptuneC.add(nepMesh);
  plutoC.add(pluMesh);

  scene.add(sunMesh);
  scene.add(mercuryC);
  scene.add(venusC);
  scene.add(earthC);
  scene.add(marsC);
  scene.add(jupiterC);
  scene.add(saturnC);
  scene.add(uranusC);
  scene.add(neptuneC);
  scene.add(plutoC);
}

function update() {
  mercuryC.rotation.y += merSpeed;
  venusC.rotation.y += venSpeed;
  earthC.rotation.y += earSpeed;
  marsC.rotation.y += marSpeed;
  jupiterC.rotation.y += jupSpeed;
  saturnC.rotation.y += satSpeed;
  uranusC.rotation.y += uraSpeed;
  neptuneC.rotation.y += nepSpeed;
  plutoC.rotation.y += pluSpeed;
}

function setupDatGui() {
  let controls = new (function () {
    this.MercurySpeed = merSpeed;
    this.VenusSpeed = venSpeed;
    this.EarthSpeed = earSpeed;
    this.MarsSpeed = marSpeed;
    this.JupiterSpeed = jupSpeed;
    this.SaturnSpeed = satSpeed;
    this.UranusSpeed = uraSpeed;
    this.NeptunSpeed = nepSpeed;
    this.PlutoSpeed = pluSpeed;
  })();

  let gui = new dat.GUI();

  gui.add(controls, "MercurySpeed").onChange((value) => {
    merSpeed = value;
  });
  gui.add(controls, "VenusSpeed").onChange((value) => {
    venSpeed = value;
  });
  gui.add(controls, "EarthSpeed").onChange((value) => {
    earSpeed = value;
  });
  gui.add(controls, "MarsSpeed").onChange((value) => {
    marSpeed = value;
  });
  gui.add(controls, "JupiterSpeed").onChange((value) => {
    jupSpeed = value;
  });
  gui.add(controls, "SaturnSpeed").onChange((value) => {
    satSpeed = value;
  });
  gui.add(controls, "UranusSpeed").onChange((value) => {
    uraSpeed = value;
  });
  gui.add(controls, "NeptunSpeed").onChange((value) => {
    nepSpeed = value;
  });
  gui.add(controls, "PlutoSpeed").onChange((value) => {
    pluSpeed = value;
  });
}

//render
function render() {
  requestAnimationFrame(render);
  update();
  trackballControl.update(clock.getDelta());
  //render the sence
  renderer.render(scene, camera);
}

//hookup the application
window.onload = function () {
  this.init();
  this.createCameraAndLights();
  this.setupDatGui();
  this.render();
};
