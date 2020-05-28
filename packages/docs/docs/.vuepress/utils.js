// Use Share
const { fs, path } = require('@vuepress/shared-utils')

// Use Dictionary
const { chinese, english } = require('./dictionary')

// Resolve
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

// read
function read (dir) {
  // Set Result
  const result = []

  // Read Dir
  fs.readdirSync(dir).map(file => {
    // Exclude `README.md`
    if (file === 'README.md') {
      return
    }

    // Clean End
    result.push(file.slice(0, -3))
  })

  // Return
  return result.sort()
}

// Copy (Clone)
const copy = target => ({
  __proto__: Object.getPrototypeOf(target),
  ...target
})

/**
 * @param source { any }
 * @param callback { function }
 * @param clone { boolean }
 * ======== ======== ========
 */
function each (source, callback, clone) {
  // Set Json if clone or not
  const json = clone === true ? copy(source) : source

  // Set Result
  const result = {}

  // Loop
  for (const key in json) {
    // Get Return
    const returner = callback(json[key], key)

    // Set Newest
    if (returner !== undefined) {
      Object.assign(result, returner)
    }

    // Stop
    if (returner === false) {
      break
    }
  }

  // Return
  return result
}

// Transfer
function transfer (mode, mapper, extend) {
  // Dictionary
  const dict = {
    // Set `en-US` -- English
    'en-US': english,
    // Set `zh-CN` -- Chinese
    'zh-CN': chinese
  }

  // Get Result
  let result = each(
    // Mapper
    mapper,
    // Callback
    name => {
      // Contain
      if (dict[mode][name] !== undefined) {
        // Json
        return {
          [name]: dict[mode][name]
        }
      }
    },
    // Clone
    true
  )

  // Extend
  if (extend) {
    result = Object.assign(result, extend)
  }

  // Return
  return result
}

// Meta
function meta (config) {
  // Loop
  each(config, (part, name) => {
    // Set Part
    config[name] = [part.mode, (delete part.mode, part)]
  })

  // Return
  return config
}

// Sider
function sider (title, catalogs = [], depth = 1) {
  // Several
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: depth,
      children: ['', ...catalogs]
    }
  ]
}

// Export
module.exports = {
  resolve,
  read,
  transfer,
  meta,
  sider
}
