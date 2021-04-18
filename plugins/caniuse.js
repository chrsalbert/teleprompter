const caniuse = require('caniuse-api')

function getConvertedBrowserName(code) {
  switch (code) {
    case 'and_chr':
      return 'Android Chrome'
    case 'and_qq':
      return 'Android QQ Browser'
    case 'baidu':
      return 'Baidu'
    case 'chrome':
      return 'Chrome'
    case 'samsung':
      return 'Samsung Internet'
    default:
      return code
  }
}

function getSupport(feature) {
  let browser = Object.entries(caniuse.getSupport(feature))
  let supportedBrowsers = browser.filter((browser) => browser[1].x || browser[1].y || browser[1].a)
  let browserNames = supportedBrowsers.map((browser) => {
    return { title: getConvertedBrowserName(browser[0]), version: browser[1] }
  })
  return browserNames
}

export default async ({ store, app, route}, inject) => {
  inject('getSupportedBrowsers', (feature) => {
    return getSupport(feature)
  })
}
