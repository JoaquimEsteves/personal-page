import preactRender from "preact-render-to-string";
import * as app from "./app";

export function render() {
  return preactRender(app.App());
}

