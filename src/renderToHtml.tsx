import renderToString from "preact-render-to-string";
import * as app from "./app";

export function render() {
  return renderToString(<app.App />);
}

