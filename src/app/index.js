import { Terminal } from "../terminal.js";
import { Renderer } from "../wasm/index.js";
import { app$render } from "./render.js";
import { app$scene, app$stroke } from "./attributes.js";
import { app$point, app$pixels } from "./shapes.js";
import { app$call } from "./control.js";
import {
  app$cols,
  app$rows,
  app$node,
  app$fontFamily,
  app$fontSize,
  app$fontWeight,
  app$height,
  app$width,
  app$cellHeight,
  app$cellWidth,
  app$frameCount,
  app$frameRate,
} from "./properties.js";
import { app$frame } from "./hooks.js";
import { app$start, app$stop } from "./schedule.js";

export function App({ memory, frameRate = 30, ...options } = {}) {
  const terminal = new Terminal(options);
  const renderer = Renderer.new(terminal._cols, terminal._rows);
  Object.defineProperties(this, {
    _memory: { value: memory },
    _terminal: { value: terminal },
    _renderer: { value: renderer },
    _after: { value: [], writable: true },
    _before: { value: [], writable: true },
    _frame: { value: [], writable: true },
    _frameRate: { value: frameRate, writable: true },
    _frameCount: { value: 0, writable: true },
    _timer: { value: null, writable: true },
    _reschedule: { value: true, writable: true },
    _stop: { value: false, writable: true },
  });
  this.scene("#000000");
}

Object.defineProperties(App.prototype, {
  render: { value: app$render, writable: true, configurable: true },
  start: { value: app$start, writable: true, configurable: true },
  stop: { value: app$stop, writable: true, configurable: true },
  frame: { value: app$frame, writable: true, configurable: true },
  stroke: { value: app$stroke, writable: true, configurable: true },
  scene: { value: app$scene, writable: true, configurable: true },
  point: { value: app$point, writable: true, configurable: true },
  pixels: { value: app$pixels, writable: true, configurable: true },
  call: { value: app$call, writable: true, configurable: true },
  cols: { value: app$cols, writable: true, configurable: true },
  rows: { value: app$rows, writable: true, configurable: true },
  width: { value: app$width, writable: true, configurable: true },
  height: { value: app$height, writable: true, configurable: true },
  fontFamily: { value: app$fontFamily, writable: true, configurable: true },
  fontSize: { value: app$fontSize, writable: true, configurable: true },
  fontWeight: { value: app$fontWeight, writable: true, configurable: true },
  cellWidth: { value: app$cellWidth, writable: true, configurable: true },
  cellHeight: { value: app$cellHeight, writable: true, configurable: true },
  node: { value: app$node, writable: true, configurable: true },
  frameCount: { value: app$frameCount, writable: true, configurable: true },
  frameRate: { value: app$frameRate, writable: true, configurable: true },
});
