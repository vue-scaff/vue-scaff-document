// Use Utils
const { read, resolve, transfer, meta, sider } = require('./utils')

// Exports
module.exports = context => {
  // Set Option
  const option = {}

  // Theme
  option.theme = `reco`

  // Locales
  option.locales = {
    // En
    '/': transfer(`en-US`, [`lang`, `title`, `description`]),
    // Cn
    '/zh/': transfer(`zh-CN`, [`lang`, `title`, `description`])
  }

  // Head
  option.head = meta([
    {
      mode: `link`,
      rel: `icon`,
      href: `/logo.png`
    },
    {
      mode: `link`,
      rel: `manifest`,
      href: `/manifest.json`
    },
    {
      mode: `link`,
      rel: `apple-touch-icon`,
      href: `/icons/apple-touch-icon-152x152.png`
    },
    {
      mode: `link`,
      rel: `mask-icon`,
      href: `/icons/safari-pinned-tab.svg`,
      color: `#3eaf7c`
    },
    {
      mode: `meta`,
      name: `theme-color`,
      content: `#3eaf7c`
    },
    {
      mode: `meta`,
      name: `apple-mobile-web-app-capable`,
      content: `yes`
    },
    {
      mode: `meta`,
      name: `apple-mobile-web-app-status-bar-style`,
      content: `black`
    },
    {
      mode: `meta`,
      name: `msapplication-TileImage`,
      content: `/icons/msapplication-icon-144x144.png`
    },
    {
      mode: `meta`,
      name: `msapplication-TileColor`,
      content: `#000000`
    }
  ])

  // Theme Config
  option.themeConfig = {
    // Github Repo
    repo: `vue-scaff/vue-scaff-document`,
    // Author
    author: `joenix`,
    // Link 2 Github
    editLinks: true,
    // Smooth Scroll
    smoothScroll: true,
    // Docs
    docsDir: `packages/docs/docs`,
    // Algolia Search -- #697 Provided by the official algolia team.
    algolia: context.isProd
      ? {
        apiKey: `3a539aab83105f01761a137c61004d85`,
        indexName: `vue-scaff`
      }
      : null,
    // Locales
    locales: {
      // en-US
      '/': transfer(
        `en-US`,
        [
          `label`,
          `selectText`,
          `ariaLabel`,
          `editLinkText`,
          `lastUpdated`,
          `nav`
        ],
        {
          sidebar: {
            '/guide/': sider(`Guide`, [
              'start',
              'structure',
              'deploy'
            ]),
            '/development/': sider(`Development`, [
              'configure',
              'use',
							'mock'
            ]),
            '/template/': sider(`Template`, [
							'h5',
							'admin'
						])
          }
        }
      ),
      // zh-CN
      '/zh/': transfer(
        `zh-CN`,
        [
          `label`,
          `selectText`,
          `ariaLabel`,
          `editLinkText`,
          `lastUpdated`,
          `nav`
        ],
        {
          sidebar: {
            // "/zh/guide/": sider(`指南`, read(resolve(`../zh/guide`))),
            // "/zh/development/": sider(`开发`, read(resolve(`../zh/development`))),
            // "/zh/template/": sider(`模板`, read(resolve(`../zh/template`)))
          }
        }
      )
    }
  }

  // Plugin
  option.plugins = [
    [`@vuepress/back-to-top`, true],
    [
      `@vuepress/pwa`,
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    // [`@vuepress/medium-zoom`, true],
    [
      `container`,
      {
        type: `vue`,
        before: `<pre class="vue-container"><code>`,
        after: `</code></pre>`
      }
    ],
    [
      `container`,
      {
        type: `upgrade`,
        before: info => `<UpgradePath title="${info}">`,
        after: `</UpgradePath>`
      }
    ],
    [`vuepress-plugin-smooth-scroll`],
    [`flowchart`]

    /* // Google Analytics
    [
      `@vuepress/google-analytics`,
      {
        ga: `UA-128189152-1`
      }
    ],
		*/
  ]

  // Watch Change
  option.extraWatchFiles = [
    `.vuepress/nav/en-US.js`,
    `.vuepress/nav/zh-CN.js`,
    `.vuepress/dictionary/en-US.js`,
    `.vuepress/dictionary/zh-CN.js`
  ]

  // Returner
  return option
}
