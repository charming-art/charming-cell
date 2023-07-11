import { frameOf } from "../common.js";
import { app as App } from "@charming-art/charming";
import { Terminal } from "@charming-art/charming-terminal";

export async function createApp(options) {
  const app = await App(options);
  window.app = app;
  return app;
}

export function createTerminal(options) {
  const terminal = new Terminal(options);
  window.terminal = terminal;
  return terminal;
}

export function useFrame(TARGET_FRAME, stop) {
  let frame = 0;
  let div;
  const update = () => {
    if (!div) {
      div = document.createElement("div");
      document.body.insertBefore(div, null);
      div.innerText = frameOf(frame);
    }
    frame++;
    if (frame >= TARGET_FRAME && import.meta.env.MODE !== "development") stop();
    div.innerText = `frame: ${frame}`;
  };
  const clear = () => {
    if (div) div.remove();
  };
  return [update, clear];
}