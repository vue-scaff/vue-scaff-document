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
    "revision": "8dd7829220abb5c67a0971db2d79487d"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.233ce8d9.css",
    "revision": "16a53a772d6f4956d9c6537581813b4c"
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
    "url": "assets/js/21.abd0952c.js",
    "revision": "18a81e8d0f09f2afb5ccaedbc4b0e0c7"
  },
  {
    "url": "assets/js/22.3a303c65.js",
    "revision": "3fe49c700110b2be3afc5e4804ea8321"
  },
  {
    "url": "assets/js/23.e08c9de4.js",
    "revision": "1012a125adc7719d6f052c8b034a7d48"
  },
  {
    "url": "assets/js/24.fec3675e.js",
    "revision": "6581c351401310e413388694e90d92f4"
  },
  {
    "url": "assets/js/25.9e172ae5.js",
    "revision": "5e66da9ff63ef072ddacb9a9d49efcc5"
  },
  {
    "url": "assets/js/26.bc265a7b.js",
    "revision": "5f22c65c2bd9f8260cec960409d9e253"
  },
  {
    "url": "assets/js/27.e7670710.js",
    "revision": "26c0e846fa23fc9e70cff43c785d313b"
  },
  {
    "url": "assets/js/28.c3a02257.js",
    "revision": "1f6f1d602dcd19e0725fe8329687846f"
  },
  {
    "url": "assets/js/29.49c7e06c.js",
    "revision": "e0edb3a34ec69b15fadc08837cd04dac"
  },
  {
    "url": "assets/js/30.c47e9f69.js",
    "revision": "1eab2458d8fb37639c46bc556bd66a77"
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
    "url": "assets/js/6.4f8021bf.js",
    "revision": "d9b5a43c0f66c3243c34c390f7f7d5bf"
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
    "url": "assets/js/app.60b79b9a.js",
    "revision": "7384a4b7a9f565d43b49258b6478a85c"
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
    "revision": "7c9948d0eca052b2821ac06c97c6315e"
  },
  {
    "url": "development/configure.html",
    "revision": "ef710b8691eb1dbd7448628583ae72ca"
  },
  {
    "url": "development/index.html",
    "revision": "8050144499ef027adcaf27762c86660a"
  },
  {
    "url": "development/mock.html",
    "revision": "aaea5680f1958dfa4efff0687f229ed9"
  },
  {
    "url": "development/use.html",
    "revision": "148a877c0e901e46f5b303a96774965c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "0af9044ddc7752f26eaccc22fb3f2659"
  },
  {
    "url": "guide/index.html",
    "revision": "56d5d7c31a0195737f2e703c7363f166"
  },
  {
    "url": "guide/start.html",
    "revision": "42cb421bd53630bf662f0f98d4786a43"
  },
  {
    "url": "guide/structure.html",
    "revision": "943866af164d73e2fb36a3c41ee111cc"
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
    "revision": "7150c807c8428b7830ca6714566db69e"
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
    "revision": "67f24705146191b5a5c2d99f2c1abc50"
  },
  {
    "url": "template/index.html",
    "revision": "b1532ee54174c6d3628aa1fdd4a176d7"
  },
  {
    "url": "timeline/index.html",
    "revision": "613bd283a1659139f14f896b153ed779"
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
    "revision": "e8129166eda980d23f804bcd01621086"
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
