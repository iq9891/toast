/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b05435e095415b368aa364ff5da9994"
  },
  {
    "url": "assets/css/0.styles.86146b40.css",
    "revision": "d83394ae5c31b86fd82b221095a737a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.163201a7.js",
    "revision": "88014d3acd563d49f7ed9c339f60627c"
  },
  {
    "url": "assets/js/3.cee8e4e2.js",
    "revision": "86f7c5ef3d8dd3c2c31de917dea192b3"
  },
  {
    "url": "assets/js/4.672cf9c8.js",
    "revision": "644b558c8eb083c633e39506ac2c6e37"
  },
  {
    "url": "assets/js/5.3d8a2aba.js",
    "revision": "974267128c1a5ff8a63c4faba8d5ba51"
  },
  {
    "url": "assets/js/app.d2c7694f.js",
    "revision": "b9d0f86741ba2114de1ba1268a9e2886"
  },
  {
    "url": "index.html",
    "revision": "daa098504bf97963b5f6465765bfdef1"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "wap/zh-cn.html",
    "revision": "6d86100d9e7d496c5342dd5fdce721e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
