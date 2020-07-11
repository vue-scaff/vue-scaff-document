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
    "revision": "7bf2a882eaeda01c54d8f216d093ea78"
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
    "url": "assets/js/14.4634fc4e.js",
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
    "url": "assets/js/21.3a44e18d.js",
    "revision": "a3f96900d83d3bd7fa2fccce8bbd3dac"
  },
  {
    "url": "assets/js/22.48f6eef7.js",
    "revision": "505d77dad5bc9a26557c3042c9cfa433"
  },
  {
    "url": "assets/js/23.2c2fdff2.js",
    "revision": "16f184bfaa34ef11ee929a513618042d"
  },
  {
    "url": "assets/js/24.14807a90.js",
    "revision": "8a902d1aece188047b96a77ea99daf08"
  },
  {
    "url": "assets/js/25.5e710718.js",
    "revision": "24e629d8b1e314151f1dadd028b91ae8"
  },
  {
    "url": "assets/js/26.38336ec7.js",
    "revision": "6f12d560e368e734dc771b33627ce636"
  },
  {
    "url": "assets/js/27.3169c2dd.js",
    "revision": "41f3b2407ad9d77b3f468ef949712d73"
  },
  {
    "url": "assets/js/28.c9858be2.js",
    "revision": "0ccf2238b8f23037bdef0a0201463935"
  },
  {
    "url": "assets/js/29.fbc28780.js",
    "revision": "759c3eb8b6306d8e793dad39a2d9547b"
  },
  {
    "url": "assets/js/30.bd55cf9e.js",
    "revision": "6cf80a9a02224c3787208d601901ba23"
  },
  {
    "url": "assets/js/31.f4803087.js",
    "revision": "13c9e6e1f5d9cc1f0529903edbbda4ef"
  },
  {
    "url": "assets/js/32.614b0dc3.js",
    "revision": "d2c53f0e4c0bef69b396167b24fc8c31"
  },
  {
    "url": "assets/js/33.d117a244.js",
    "revision": "e5fa0c6721ac2accd1490c42d0861703"
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
    "url": "assets/js/app.3f0a6435.js",
    "revision": "00e4cdf4e9fe6e335e170c792b595547"
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
    "revision": "66cdd023b658beac1a90df1aff9a860f"
  },
  {
    "url": "development/configure.html",
    "revision": "beec2202ebc34259104800e8e17d6fc4"
  },
  {
    "url": "development/index.html",
    "revision": "aee695fb525c9fb6b2ee0f651bd680e5"
  },
  {
    "url": "development/mock.html",
    "revision": "0df9b4b3250786df8e014935da83ae25"
  },
  {
    "url": "development/use.html",
    "revision": "5877019cb91035caffb19cc852a84fb7"
  },
  {
    "url": "guide/deploy.html",
    "revision": "11b5bc7d08115b9c7db1b9b0f2726f6b"
  },
  {
    "url": "guide/index.html",
    "revision": "0672446a5aef67c3fd4e663c3db0be98"
  },
  {
    "url": "guide/start.html",
    "revision": "7c0abd04ce293dad4412836d931b92ac"
  },
  {
    "url": "guide/structure.html",
    "revision": "790b3b429744345efc2402c001459768"
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
    "revision": "ed5212c86c7174e5092c0112e3de63e7"
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
    "revision": "30b54f4473410602f10119518bf8f8d0"
  },
  {
    "url": "template/admin.html",
    "revision": "2fb773265d3532cd6fa4de0e9f7d9bf6"
  },
  {
    "url": "template/h5.html",
    "revision": "dde53cd157f33b71d94fa0821d89d41e"
  },
  {
    "url": "template/index.html",
    "revision": "d40abac992b4738908ec0b26321722dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "4e47b9a67b9f084b7fe3a9b822fcccce"
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
    "revision": "8834b8e257ab48193ecd1d40e56cb7bc"
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
