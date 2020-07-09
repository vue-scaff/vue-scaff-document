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
    "revision": "aa06b252d77d3dade92ff84503fa7059"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.d2909fa5.css",
    "revision": "21ba9138e03c9e3d7a76dc3e9aaac568"
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
    "url": "assets/js/11.45904ade.js",
    "revision": "acc4cba5701a50ae81fca20eb4232abb"
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
    "url": "assets/js/15.d26eb8fe.js",
    "revision": "0ece447d1d73e0b4b982b2a98e4f1582"
  },
  {
    "url": "assets/js/16.06799a70.js",
    "revision": "a637e30f49b5159122c1bd9d34b25fd3"
  },
  {
    "url": "assets/js/17.7ec81256.js",
    "revision": "40f01407290b5e5805280a94cf4806ee"
  },
  {
    "url": "assets/js/18.4b4be230.js",
    "revision": "9c68da85e1fb485b7280e113716f0d85"
  },
  {
    "url": "assets/js/19.fffe2cd0.js",
    "revision": "a754df8d2bea7d4cd7ff7311c3ed6359"
  },
  {
    "url": "assets/js/20.84702b4a.js",
    "revision": "9630295723682a4d8985d18535e7bfd5"
  },
  {
    "url": "assets/js/21.9722ae9f.js",
    "revision": "35cc142eccda04f771ae1063a2e2b88d"
  },
  {
    "url": "assets/js/22.71f44c13.js",
    "revision": "8ffd8ebc40cfd7a704e0d884de13e8eb"
  },
  {
    "url": "assets/js/23.5c00e96b.js",
    "revision": "2a80dadea07a95ff063ef6a32578578a"
  },
  {
    "url": "assets/js/24.f4ccba21.js",
    "revision": "97edae2f0247919d09752f49de1a15d5"
  },
  {
    "url": "assets/js/25.5e710718.js",
    "revision": "24e629d8b1e314151f1dadd028b91ae8"
  },
  {
    "url": "assets/js/26.fe210721.js",
    "revision": "1f8430f521607c82e5af8247f7dbc80c"
  },
  {
    "url": "assets/js/27.b34a9cee.js",
    "revision": "508693d51ea58395a39309c5ca1f54fe"
  },
  {
    "url": "assets/js/28.a1ae0b32.js",
    "revision": "68bc9832cf1cf02ac322aed143ef3179"
  },
  {
    "url": "assets/js/29.2bdcebb5.js",
    "revision": "cca8a938c427c8c1f3b2c2ead98cf85a"
  },
  {
    "url": "assets/js/30.d765e975.js",
    "revision": "200608fe2f14efca3c2f08f822e53ca1"
  },
  {
    "url": "assets/js/31.2259a9f7.js",
    "revision": "fa3ec4a764a4e3b19155dd4a40280b20"
  },
  {
    "url": "assets/js/32.a9869f04.js",
    "revision": "fb74675279c777c4b424f062228ced9f"
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
    "url": "assets/js/app.d90f7427.js",
    "revision": "30e0b5e94d3d000abdd03d5b2a519408"
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
    "revision": "c0546e6c2079871b991f2e2cb19bfd41"
  },
  {
    "url": "development/configure.html",
    "revision": "1f387c0b96494596367762ea15709f91"
  },
  {
    "url": "development/index.html",
    "revision": "17cacd7efba730630ae75bab9d8f6d74"
  },
  {
    "url": "development/mock.html",
    "revision": "64b42a8fd4797fb7d79e06022f4dd7a2"
  },
  {
    "url": "development/use.html",
    "revision": "8276307ceb0db28e36673b95eaf00c06"
  },
  {
    "url": "guide/deploy.html",
    "revision": "96e2d1c2cff4bc38a3806a172d2e1a63"
  },
  {
    "url": "guide/index.html",
    "revision": "80b8fba19e50e898051df1702fdcab5f"
  },
  {
    "url": "guide/start.html",
    "revision": "62b64f21195491aa6240174c711483cf"
  },
  {
    "url": "guide/structure.html",
    "revision": "137a9a71474a3057eeac7ba60352fc28"
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
    "revision": "34c2f70990d08ae1769a3c5954140ba3"
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
    "revision": "bf32322756e19c6492cff652c7cb83a5"
  },
  {
    "url": "template/index.html",
    "revision": "c56425d35efa39d5538125a5f47af183"
  },
  {
    "url": "timeline/index.html",
    "revision": "6df0d945e185da3b4a7de651ed5955d6"
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
    "revision": "5732c6ab446ccbe6cab63b7af97a0c1d"
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
