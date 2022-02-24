const fs = require("fs");
const path = require("path");
const { build } = require("vite");
// Monkey Patch React
// This is necessary due to a bug in styled-components :(
// See: https://preactjs.com/guide/v8/switching-to-preact/#aliasing-manually
const React = require("react"); // Importing these two libraries is important
const ReactDOM = require("react-dom"); // Else we get "can't assign to undefined" errors
const Preact = require("preact/compat");
const Module = module.constructor;
Module._cache[require.resolve("react")].exports = Preact;
Module._cache[require.resolve("react-dom")].exports = Preact;

const toAbsolute = (p) => path.resolve(__dirname, p);

(async () => {
  // Create the default build programatically
  // Will clear out the dist
  await build();
  // Now we create the 'static' build through the ssr options
  // Yes, it also feels weird to me that we need to build things twice
  // (Especially because everything inside the public folder gets copied)
  // I've yet to find a way that's more ergonomic
  // Plus, the build is fast AF. So it doesn't bother me
  await build({
    configFile: toAbsolute("./vite.config.ts"),
    build: {
      ssr: true,
      rollupOptions: { input: toAbsolute("./src/renderToHtml.tsx") },
      outDir: toAbsolute("./dist/ssr_crap"),
    },
  });

  const { render } = require("./dist/ssr_crap/renderToHtml.js");
  const { html, css } = render();

  const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");

  const pre_rendered = template
    .replace("<!--ssr-html-->", html)
    .replace("<!--ssr-css-->", css);

  const filePath = "dist/index.html";
  fs.writeFileSync(toAbsolute(filePath), pre_rendered);
  // Finally, delete the ssr_crap folder
  fs.rmSync(toAbsolute("./dist/ssr_crap"), { recursive: true, force: true });
  console.log("pre-rendered:", filePath);
})();

