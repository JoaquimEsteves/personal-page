const fs = require("fs");
const path = require("path");
const { build } = require("vite");

const toAbsolute = (p) => path.resolve(__dirname, p);

(async () => {
  // Create the default build programatically
  // Will clear out the dist
  await build();
  // Now we create the 'static' build through the ssr options
  // Yes, it also feels weird to me that we need to build things twice
  // I've yet to find a way that's more ergonomic
  // Plus, the build is fast AF. So it doesn't bother me
  await build({
    build: {
      ssr: true,
      rollupOptions: { input: toAbsolute("./src/renderToHtml.tsx") },
      outDir: toAbsolute("./dist/ssr_crap"),
      // Make things nice and readable while I have a bug...
      minify: false,
    },
  });

  const { render } = require("./dist/ssr_crap/renderToHtml.js");
  const appHtml = render();

  const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");

  const html = template.replace(`<!--app-html-->`, appHtml);

  const filePath = "dist/index.html";
  fs.writeFileSync(toAbsolute(filePath), html);
  // Finally, delete the ssr_crap folder
  // COMMENTED: Stuffs buggy atm; so I'm leaving it up
  // fs.rmSync(toAbsolute("./dist/ssr_crap"), { recursive: true, force: true });
  console.log("pre-rendered:", filePath);
})();

