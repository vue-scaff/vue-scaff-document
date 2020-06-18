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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d988a9c3c01871cf8da6a35c3b7a5a2"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.071110e9.css",
    "revision": "374a48873144dde747a1196c58fe23ee"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.47177337.js",
    "revision": "acf6c9086f1530e7b347eef69fa5ef34"
  },
  {
    "url": "assets/js/10.8fcfa45d.js",
    "revision": "0e0ce39c643c7e51a144a7f97f8a7821"
  },
  {
    "url": "assets/js/11.2c16addd.js",
    "revision": "c6dfd93ced7b26aa743f4041710726e6"
  },
  {
    "url": "assets/js/12.9069f076.js",
    "revision": "f26cf8b75c34e2f931523f6386f6f616"
  },
  {
    "url": "assets/js/13.83b67e2b.js",
    "revision": "a2bb4899b2fc3da2a80924bf63a72f05"
  },
  {
    "url": "assets/js/14.2acdfc45.js",
    "revision": "57ff1fae2bff11a47a7aa5135cba39ef"
  },
  {
    "url": "assets/js/15.f59e9876.js",
    "revision": "c13008c8cabbae6ac45de983cef384e4"
  },
  {
    "url": "assets/js/16.e30ff959.js",
    "revision": "a8b9a549fb1e9983e22e134cafb180da"
  },
  {
    "url": "assets/js/17.1f6128bd.js",
    "revision": "dadbcb52537f8e7b51858b4641949f70"
  },
  {
    "url": "assets/js/18.5b86323f.js",
    "revision": "02c2b9aaaf65a777ed8ee097b6ab941c"
  },
  {
    "url": "assets/js/19.5d25d271.js",
    "revision": "ca003f878f1f22b0f09a24cfed228899"
  },
  {
    "url": "assets/js/20.dddec2a8.js",
    "revision": "cc6216e6285922e538ec7a4e3808419f"
  },
  {
    "url": "assets/js/21.e1659171.js",
    "revision": "42d1d385c3795afb78ddb49b20762ca0"
  },
  {
    "url": "assets/js/22.5528c49d.js",
    "revision": "13ef86bb331c35db7976ada08c858bde"
  },
  {
    "url": "assets/js/23.9d1a5e7c.js",
    "revision": "3d2615d2da9120c3ad51f1e5cc662efa"
  },
  {
    "url": "assets/js/24.fec3675e.js",
    "revision": "6581c351401310e413388694e90d92f4"
  },
  {
    "url": "assets/js/25.0c67c5c0.js",
    "revision": "2da9379c871ca62eca9ab4f9b99ea4c0"
  },
  {
    "url": "assets/js/26.a32689cb.js",
    "revision": "6800e105243a8910567f013ae4d7ee57"
  },
  {
    "url": "assets/js/27.750a6154.js",
    "revision": "e6ea8023421e5fc3d9868425f63eb30e"
  },
  {
    "url": "assets/js/28.f9812b53.js",
    "revision": "66dd0d3e076f7cc2f323d41ecfde4ad2"
  },
  {
    "url": "assets/js/29.49c7e06c.js",
    "revision": "e0edb3a34ec69b15fadc08837cd04dac"
  },
  {
    "url": "assets/js/30.4450d2e2.js",
    "revision": "35925c1435c16855d677bee0aafb111d"
  },
  {
    "url": "assets/js/31.e87a2229.js",
    "revision": "c4c83b516c14ac5c741b8cd3914181d3"
  },
  {
    "url": "assets/js/32.f6723c44.js",
    "revision": "fd3c952f390fe03441c9cabe794dbbc6"
  },
  {
    "url": "assets/js/6.362c1951.js",
    "revision": "0a26f5d38cb6bb6fba92f85bbd673013"
  },
  {
    "url": "assets/js/7.3cf665dc.js",
    "revision": "6ebc26fac591b350b038e3e5604f1c65"
  },
  {
    "url": "assets/js/8.7ac33546.js",
    "revision": "bbab566a4737b2c6b779101ce6f802a5"
  },
  {
    "url": "assets/js/9.89a0d55a.js",
    "revision": "8571163ac73f20622ff3b4b97398c179"
  },
  {
    "url": "assets/js/app.3beff08a.js",
    "revision": "617755dd9d38347675c525c0bcadf0a6"
  },
  {
    "url": "assets/js/vendors~docsearch.132d8a7b.js",
    "revision": "7d8328863eb97976788adbc5f475fc72"
  },
  {
    "url": "assets/js/vendors~flowchart.96978d72.js",
    "revision": "fb01075227416228074dba0c8799a96f"
  },
  {
    "url": "assets/js/vendors~notification.77edd011.js",
    "revision": "5813e5511814d52c297bbe171a71fc32"
  },
  {
    "url": "categories/index.html",
    "revision": "ed452a00f88a8c22ede780b4575bb46c"
  },
  {
    "url": "development/configure.html",
    "revision": "18537a59467e07d2ea330f9dfcca1e9d"
  },
  {
    "url": "development/index.html",
    "revision": "c367358351fac9c2eddbc1759c312a8f"
  },
  {
    "url": "development/mock.html",
    "revision": "50367531bc1e7d8cf1b824bc269497d6"
  },
  {
    "url": "development/use.html",
    "revision": "aa0512904aae5cd7eee4ee827808c5d7"
  },
  {
    "url": "guide/deploy.html",
    "revision": "52fb43ef3d44e235ca63317451ae2ec0"
  },
  {
    "url": "guide/index.html",
    "revision": "5d1bf38ba5ba4a1c1fbc1fad78cdb9d7"
  },
  {
    "url": "guide/start.html",
    "revision": "bb27b9a1df8ace7a170c43e71a711590"
  },
  {
    "url": "guide/structure.html",
    "revision": "63a8d02f553dae6be6af122aeff81cf0"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "beb084f19263ea178c3b8ca3a2eb19cb"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "press.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "tag/index.html",
    "revision": "9b97a4be8718bce15be36357dd759930"
  },
  {
    "url": "template/index.html",
    "revision": "e7d86a23b1a035b8c29cc7b31beb09b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fcf5591558af0c1b09f3823700f0cae"
  },
  {
    "url": "vue-scaff.png",
    "revision": "9ff5f675e5a7aef8971cb812c21b5bdf"
  },
  {
    "url": "yintech.png",
    "revision": "a85a25819e690c669a6b1924eb3e3378"
  },
  {
    "url": "zh/index.html",
    "revision": "089753384a85f85c643114e5209c9c95"
  }
].concat(self.__precacheManifest || []);
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
