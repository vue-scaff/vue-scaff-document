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
    "revision": "e17c91b6bd64fe06ad55a45bd6d69c77"
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
    "url": "assets/js/1.d9c38909.js",
    "revision": "effb6791755bd1a54d67294df279d411"
  },
  {
    "url": "assets/js/10.9e0fe04f.js",
    "revision": "667ea62b269f74a52a9ad9f1d54dc5f5"
  },
  {
    "url": "assets/js/11.0d83eb5d.js",
    "revision": "e106e18a20386e477df487b5735234d8"
  },
  {
    "url": "assets/js/12.40db4319.js",
    "revision": "4c1df27a2cd144664f293bde92938d13"
  },
  {
    "url": "assets/js/13.2ee10696.js",
    "revision": "c1e2ba0f5ce5123dfc954acb1046afa6"
  },
  {
    "url": "assets/js/14.4634fc4e.js",
    "revision": "265dd1cbbf87b736de56b1d26b425ece"
  },
  {
    "url": "assets/js/15.9fa033a2.js",
    "revision": "6d368dc7b34239ba2006f73c97f4977e"
  },
  {
    "url": "assets/js/16.28ef390a.js",
    "revision": "9e5eb4a0e77a72c473f4636da4980d3d"
  },
  {
    "url": "assets/js/17.7ec81256.js",
    "revision": "40f01407290b5e5805280a94cf4806ee"
  },
  {
    "url": "assets/js/18.20763da9.js",
    "revision": "4a51fddadf1a5aa0fe4e5979ceeedf11"
  },
  {
    "url": "assets/js/19.e36c191c.js",
    "revision": "87f01d5ce0f50130db61fedfbc8fba2c"
  },
  {
    "url": "assets/js/20.774947da.js",
    "revision": "eb85053ca24130b75d7ab25da192a4c1"
  },
  {
    "url": "assets/js/21.e928203e.js",
    "revision": "ee407010fef6a4436d5b7dad18ea424e"
  },
  {
    "url": "assets/js/22.09c7fec2.js",
    "revision": "007819a6a419f96a10cf445fdfe40865"
  },
  {
    "url": "assets/js/23.1e349424.js",
    "revision": "35e8d52ac3382434f840aaa6a675103c"
  },
  {
    "url": "assets/js/24.7863d184.js",
    "revision": "f7d7dedf4d09f0a27346f2d85ce1a8d8"
  },
  {
    "url": "assets/js/25.c1e5c6dd.js",
    "revision": "b416debe47f5bc813be70436e3275e5f"
  },
  {
    "url": "assets/js/26.e30baf46.js",
    "revision": "1262fe28d806fc9b30da5c4de5568ced"
  },
  {
    "url": "assets/js/27.385e013f.js",
    "revision": "4fb2ef86d873892557a7058f8d8306e7"
  },
  {
    "url": "assets/js/28.f4ca78e2.js",
    "revision": "9f3cb0da3f35dc6bb0d137199ae2f0ed"
  },
  {
    "url": "assets/js/29.07cd9293.js",
    "revision": "cc755624503f8348bd14617f9c568dce"
  },
  {
    "url": "assets/js/30.3170d285.js",
    "revision": "5a71aa3b7c6d21a85a30ae1ce51f2351"
  },
  {
    "url": "assets/js/31.91549244.js",
    "revision": "e64eeead874177c582bd4b63347eaa05"
  },
  {
    "url": "assets/js/32.c1f0b9a5.js",
    "revision": "142413c2aeb54a0156916317b9273a41"
  },
  {
    "url": "assets/js/33.c2a9c21d.js",
    "revision": "3e80c4f09f79d304d6da118dd897945e"
  },
  {
    "url": "assets/js/34.f046712d.js",
    "revision": "749e4d88026092a8cc8b202c3ebf79af"
  },
  {
    "url": "assets/js/35.7c1cc45e.js",
    "revision": "68134b9b008ff3b5d61218d62ad945af"
  },
  {
    "url": "assets/js/36.5347cc11.js",
    "revision": "c3c695138ec4f6ca464833479367c10b"
  },
  {
    "url": "assets/js/37.9308ed5c.js",
    "revision": "a4b8d4085558ca825c859be1a442e464"
  },
  {
    "url": "assets/js/38.90af24a1.js",
    "revision": "4f0bb51227841b6c59ccefa92f0e854d"
  },
  {
    "url": "assets/js/39.1f59527a.js",
    "revision": "f981e50379310da392ff1fce8f519839"
  },
  {
    "url": "assets/js/40.2ce220ef.js",
    "revision": "3598602f8ab4f0996a5b2da2e2a26fc5"
  },
  {
    "url": "assets/js/41.11989599.js",
    "revision": "dfc33804376903003273d432dfe63dbb"
  },
  {
    "url": "assets/js/42.aa7231ce.js",
    "revision": "cfc4e3adc29a02b070c713683ac58171"
  },
  {
    "url": "assets/js/43.2107b13e.js",
    "revision": "25a2a00832e2e044d528b4bd445eb7b5"
  },
  {
    "url": "assets/js/44.c2adaed9.js",
    "revision": "d678105618e0f1df13600d314daafa69"
  },
  {
    "url": "assets/js/45.1bc8952a.js",
    "revision": "bd71bd5a31ea25db77d6eff7301baa33"
  },
  {
    "url": "assets/js/46.99c13b62.js",
    "revision": "0f0851f5615ebef1417cae2ff9689e92"
  },
  {
    "url": "assets/js/6.453b3b17.js",
    "revision": "bf5a55e2b10e0679ab2a4b46cec76b25"
  },
  {
    "url": "assets/js/7.7271f291.js",
    "revision": "54c9f646621b9bff9c3c8994a45d5785"
  },
  {
    "url": "assets/js/8.90f0fb24.js",
    "revision": "ee178626a5fb7e9b33f2dce27d211a50"
  },
  {
    "url": "assets/js/9.4b64cd93.js",
    "revision": "e0d9d086cd81626bac8985cb99f9ae0c"
  },
  {
    "url": "assets/js/app.0dd345b9.js",
    "revision": "c6a41f23262d06d37d3d8f72b0542b5e"
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
    "revision": "525e4cd1fe6919c4f0103477ac28d8b9"
  },
  {
    "url": "development/configure.html",
    "revision": "6a042abe0585429020df12190534bd45"
  },
  {
    "url": "development/index.html",
    "revision": "cd84b2acea1c642a8b5174d523f53e59"
  },
  {
    "url": "development/mock.html",
    "revision": "5333c442c4d982dc4bda5630d5eb24b2"
  },
  {
    "url": "development/use.html",
    "revision": "06e0d2b4cee5668b6d71195b901c92bc"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a113e2b2616e8526e88524c364fc3e31"
  },
  {
    "url": "guide/index.html",
    "revision": "bdd82d056b9af0dbfdbaea4f24edfa6d"
  },
  {
    "url": "guide/start.html",
    "revision": "44523e8160f5cc5019d380d22f8521f8"
  },
  {
    "url": "guide/structure.html",
    "revision": "5cd41d67f483da213a660e19f82dca31"
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
    "revision": "d8a882924e944f05f065959aa65adc26"
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
    "revision": "4dba96035fa2af28e5b2643f30625bfd"
  },
  {
    "url": "template/admin.html",
    "revision": "c3a56b76dbe3e10fbd0aefff735836ed"
  },
  {
    "url": "template/h5.html",
    "revision": "68540804d388f5ac55c5cb6f1b27458b"
  },
  {
    "url": "template/index.html",
    "revision": "7ccb1782b34ce4b25b2432eeb7451cd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "1bb7f89067014d1536785080e8713e47"
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
    "url": "zh/development/configure.html",
    "revision": "0a420e50b5d8dbefdc08ece8a9b65e19"
  },
  {
    "url": "zh/development/index.html",
    "revision": "b7620aa560bb0c7eb53e50a9b2e18aa8"
  },
  {
    "url": "zh/development/mock.html",
    "revision": "3b6706260a351adbaedbb38eefc9a583"
  },
  {
    "url": "zh/development/use.html",
    "revision": "5a9edfe8894dd180cefc260f6aff587c"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d20017e3f50d6417679d7245ca2fc262"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "82959c02676ef1366939c7f346923c43"
  },
  {
    "url": "zh/guide/start.html",
    "revision": "6b036abd23e8f01db30d2560007c6844"
  },
  {
    "url": "zh/guide/structure.html",
    "revision": "7cc88bc0f0db25f4cadb9df2a622ecbf"
  },
  {
    "url": "zh/index.html",
    "revision": "c32c4a66584653d6ef578d5bce455dd5"
  },
  {
    "url": "zh/template/admin.html",
    "revision": "463fa7c1b615dd5bfd4398c5d4b0eccd"
  },
  {
    "url": "zh/template/h5.html",
    "revision": "74b1457e5ce9b959a1e6270b06b7ab79"
  },
  {
    "url": "zh/template/index.html",
    "revision": "ee301109d9d9da8fe1ee07b9a57b95b4"
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
