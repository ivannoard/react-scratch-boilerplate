if (!self.define) {
  let e,
    t = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    t[i] ||
      new Promise((t) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = t), document.head.appendChild(e);
        } else (e = i), importScripts(i), t();
      }).then(() => {
        let e = t[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, o) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (t[r]) return;
    let s = {};
    const c = (e) => i(e, r),
      f = { module: { uri: r }, exports: s, require: c };
    t[r] = Promise.all(n.map((e) => f[e] || c(e))).then((e) => (o(...e), s));
  };
}
define(["./workbox-0858eadd"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "index.html", revision: "86570c98df161c1600f082d521b47ffc" },
        { url: "main.js", revision: "099c4cc80f2e64217f3973218554c208" },
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map