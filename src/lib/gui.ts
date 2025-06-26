import * as Dat from "dat.gui";

export const gui = new Dat.GUI();

export interface CameraLike {
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export interface guiStructure {
    sun: {
      opacity: number;
    },
}


export function initGui(camera: CameraLike, gs: guiStructure){
  const folder = gui.addFolder('Camera');
  const sunFolder = gui.addFolder('Sun');
  folder.add(camera.position, "x", -5, 5).step(0.1).listen();
  folder.add(camera.position, "y", -10, 10).step(0.1).listen();
  folder.add(camera.position, "z", -10, 50).step(0.1).listen();
sunFolder.add(gs.sun, "opacity", 0, 1).step(0.01).listen();
};
