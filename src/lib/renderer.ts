import * as THREE from "three";

export interface SceneBundle {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}

export type LooperCallback = (sb: SceneBundle) => void;

// This is a default looper callback that can be used if no custom one is provided
export function defaultLooperCb(sb: SceneBundle) {
  sb.renderer.render(sb.scene, sb.camera);
}

export function initThreeScene(
  looperCb: LooperCallback = defaultLooperCb
): SceneBundle {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75, // fov
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far
  );
  camera.lookAt(scene.position);
  camera.position.z = 30;
  camera.position.y = 2;

  const canvas = document.getElementById("three-container") as HTMLCanvasElement;
  let renderer: THREE.WebGLRenderer;
  renderer = new THREE.WebGLRenderer({antialias: true, canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);

  const sb = { scene, camera, renderer };
  renderer.setAnimationLoop(() => looperCb(sb)); 
  return sb;
}

