import * as Dat from "dat.gui";

export const gui = new Dat.GUI();

export interface CameraLike {
  position: {
    x: number;
    y: number;
    z: number;
  };
}


export function initGui(camera: CameraLike){
  const folder = gui.addFolder('Camera');

  folder.add(camera.position, "x", -5, 5).step(0.1).listen();
  folder.add(camera.position, "y", -10, 10).step(0.1).listen();
  folder.add(camera.position, "z", -10, 50).step(0.1).listen();
};
