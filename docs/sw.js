/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-7e5eb42b'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "pwa-maskable-512x512.png",
    "revision": "60cc108f083390b2f57bb5ecbb0f5aeb"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a9a29ebc39d66187ed2233b493e0af24"
  }, {
    "url": "pwa-192x192.png",
    "revision": "e351c9346e2e9998b8c8a242a116e1e1"
  }, {
    "url": "index.html",
    "revision": "caabd26a4b9888228e2911a27da67413"
  }, {
    "url": "icon.svg",
    "revision": "8d19cf136c505c07929bd8327d9002be"
  }, {
    "url": "favicon.ico",
    "revision": "4762da196e69bbe533876b8d24d4df1f"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "c1c49820d186b1ab31aa4861da113c41"
  }, {
    "url": "assets/workbox-window.prod.es5-BBnX5xw4.js",
    "revision": null
  }, {
    "url": "assets/index-aQOYA24x.js",
    "revision": null
  }, {
    "url": "assets/index-CUFvHi8C.css",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "c1c49820d186b1ab31aa4861da113c41"
  }, {
    "url": "favicon.ico",
    "revision": "4762da196e69bbe533876b8d24d4df1f"
  }, {
    "url": "icon.svg",
    "revision": "8d19cf136c505c07929bd8327d9002be"
  }, {
    "url": "pwa-192x192.png",
    "revision": "e351c9346e2e9998b8c8a242a116e1e1"
  }, {
    "url": "pwa-512x512.png",
    "revision": "a9a29ebc39d66187ed2233b493e0af24"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "60cc108f083390b2f57bb5ecbb0f5aeb"
  }, {
    "url": "manifest.webmanifest",
    "revision": "10cee0e1dff14a4840eab89e38aef366"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
