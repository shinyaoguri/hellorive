import { Rive } from '@rive-app/canvas';

const r = new Rive({
  src: './hellorive.riv',
  canvas: document.getElementById('canvas'),
  autoplay: true,
  stateMachines: 'State Machine 1',
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  }
});
