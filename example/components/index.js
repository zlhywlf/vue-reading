import THello from "./THello.js";
import TCounter from "./TCounter.js";

export const components = { THello, TCounter };

export const tabs = [];
let id = 0;
for (let [k, v] of Object.entries(components)) {
  tabs.push({ id: id++, name: k, title: v.title, active: id == 1 });
}
