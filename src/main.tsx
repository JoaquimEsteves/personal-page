import { hydrate } from "preact";
import { App } from "./app";

hydrate(<App />, document.getElementById("root") as HTMLElement);

