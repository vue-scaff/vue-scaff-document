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
    "revision": "2f5f0cb0ace2ef76a7247ef3fa8d5dce"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.182f2887.css",
    "revision": "5bd1fdce73dba881910a24e6b6fe317d"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.2e7d8b92.js",
    "revision": "087deb602b2a71183323ff94418e0838"
  },
  {
    "url": "assets/js/10.9e0fe04f.js",
    "revision": "667ea62b269f74a52a9ad9f1d54dc5f5"
  },
  {
    "url": "assets/js/11.ea4d0ea3.js",
    "revision": "77d838a5fa2a81c08823c8203729aab3"
  },
  {
    "url": "assets/js/12.40db4319.js",
    "revision": "4c1df27a2cd144664f293bde92938d13"
  },
  {
    "url": "assets/js/13.0af6bb4a.js",
    "revision": "6454c9e8a9216e991e64eb38bca634d6"
  },
  {
    "url": "assets/js/14.d0a1b01d.js",
    "revision": "265dd1cbbf87b736de56b1d26b425ece"
  },
  {
    "url": "assets/js/15.3900ce21.js",
    "revision": "bcc595284a8c24b557bd249df505b828"
  },
  {
    "url": "assets/js/16.9ebb6221.js",
    "revision": "a05d597492a1b4f79840d27dc3093a9e"
  },
  {
    "url": "assets/js/17.7ec81256.js",
    "revision": "40f01407290b5e5805280a94cf4806ee"
  },
  {
    "url": "assets/js/18.a84c4088.js",
    "revision": "6ae7fd65a71dd577541b165262333cb8"
  },
  {
    "url": "assets/js/19.fffe2cd0.js",
    "revision": "a754df8d2bea7d4cd7ff7311c3ed6359"
  },
  {
    "url": "assets/js/20.8f302411.js",
    "revision": "9e7946d8c46a5ff856f6a8b744002b6d"
  },
  {
    "url": "assets/js/21.c25df291.js",
    "revision": "f6f39795b660be7369672c652989ac32"
  },
  {
    "url": "assets/js/22.e2304abb.js",
    "revision": "021d596d21ad14e9a38bf8caf90bf7d6"
  },
  {
    "url": "assets/js/23.1cbf8e05.js",
    "revision": "87e0459a339aac17d982ee5ee9208f4e"
  },
  {
    "url": "assets/js/24.6d417724.js",
    "revision": "b30e28ac70c345c5db0484ac4f238a4c"
  },
  {
    "url": "assets/js/25.3bd0c75b.js",
    "revision": "0f58a28a0fe5d669aee909b54e72ad83"
  },
  {
    "url": "assets/js/26.59266a4e.js",
    "revision": "fdc50f8925b5dbcd49eb6c5e6d90f593"
  },
  {
    "url": "assets/js/27.28f030ea.js",
    "revision": "7d7f9f8784027038b6caf560fb0eb7d6"
  },
  {
    "url": "assets/js/28.ee97423c.js",
    "revision": "d78d84f5637d94538af16d67bb8406ac"
  },
  {
    "url": "assets/js/29.2bdcebb5.js",
    "revision": "cca8a938c427c8c1f3b2c2ead98cf85a"
  },
  {
    "url": "assets/js/30.0dc6e29f.js",
    "revision": "4820e62e3f2f9fa3f7d36ea6924fb47e"
  },
  {
    "url": "assets/js/31.6666980c.js",
    "revision": "f9b89ef2113a1a40ca7f5f0ba46c7291"
  },
  {
    "url": "assets/js/32.247cfe96.js",
    "revision": "55ee5b3bf419f55f3f61eed31dda6480"
  },
  {
    "url": "assets/js/33.128f95aa.js",
    "revision": "e3a8b9df26da1177992dd4265b04c6fe"
  },
  {
    "url": "assets/js/34.09016398.js",
    "revision": "c9d5ea72710d305f29266043c0abc5a7"
  },
  {
    "url": "assets/js/6.bbcb8b64.js",
    "revision": "38ae20354a3999cbf15d624d5e498a38"
  },
  {
    "url": "assets/js/7.0d8e5e9e.js",
    "revision": "5363696da044f76754d43d45e2a8b07c"
  },
  {
    "url": "assets/js/8.7199dc56.js",
    "revision": "2c1bd7711275baf8d682472da3f6153e"
  },
  {
    "url": "assets/js/9.4bcaccc1.js",
    "revision": "948a2e54ba575a146e009622120f4c9e"
  },
  {
    "url": "assets/js/app.15efd833.js",
    "revision": "52d98aea34a4f272aab059ac4cb554f3"
  },
  {
    "url": "assets/js/vendors~docsearch.d2abf963.js",
    "revision": "3e04b4482b1ff2b52febe82a9368900f"
  },
  {
    "url": "assets/js/vendors~flowchart.9282e8c5.js",
    "revision": "7a204f17672a631832499c99f11828fb"
  },
  {
    "url": "assets/js/vendors~notification.df2b99a2.js",
    "revision": "18688899bac156f88313753e334301a8"
  },
  {
    "url": "categories/index.html",
    "revision": "894f98dbc93b36c14a4e75d582cb80b1"
  },
  {
    "url": "development/configure.html",
    "revision": "55482db9df348341bfa0a912f4166f7a"
  },
  {
    "url": "development/index.html",
    "revision": "23c14fc77cee4f02d3a1c72eda12b494"
  },
  {
    "url": "development/mock.html",
    "revision": "ce1c8fee2385cc2a5f1a886d8bb4fe64"
  },
  {
    "url": "development/use.html",
    "revision": "bc24c4fd4b36e1ff320a358fcd05fa00"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5df21d0112bba3574b2739d007293a20"
  },
  {
    "url": "guide/index.html",
    "revision": "8f50863cf0aefab041a225c864b42d86"
  },
  {
    "url": "guide/start.html",
    "revision": "8c7587735ed45d371c05e968b68b1382"
  },
  {
    "url": "guide/structure.html",
    "revision": "10d03f8f596a9f7203483173f175679a"
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
    "revision": "06e0652756c8100b5797df79f59f3949"
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
    "revision": "c407aed4bae5f618cdada77980725d4c"
  },
  {
    "url": "template/admin.html",
    "revision": "2c130c2b452359b551ffbcaaa7203312"
  },
  {
    "url": "template/h5.html",
    "revision": "e0d485607dbd7b2089780126e90c85b4"
  },
  {
    "url": "template/index.html",
    "revision": "408baa6ff3e2740510b757fcc01daa16"
  },
  {
    "url": "timeline/index.html",
    "revision": "7b3ba4621f9f05455e1a2baf7efc3014"
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
    "revision": "9236b28a6c1fe391fe51ce6c6113be13"
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
