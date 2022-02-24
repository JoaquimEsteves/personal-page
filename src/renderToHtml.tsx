import renderToString from "preact-render-to-string";
import { App } from "./app";
import type { VNode } from "preact";
import { ServerStyleSheet } from "styled-components";

export function render() {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(<App />) as unknown as VNode);

  return { html, css: sheet.getStyleTags() };
}

