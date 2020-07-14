const caniuse = require('caniuse-api')

export default {
    methods: {
        getBrowserName(code) {
            switch(code) {
                case "and_chr":
                    return 'Android Chrome'
                case "and_qq":
                    return 'Android QQ Browser'
                case "baidu":
                    return 'Baidu'
                case "chrome":
                    return 'Chrome'
                case "samsung":
                    return 'Samsung Internet'
                default:
                    return code
            }
        },
        getSupport(feature) {
            let browser = Object.entries(caniuse.getSupport(feature))
            let supportedBrowsers = browser.filter(browser => browser[1].x)
            let browserNames = supportedBrowsers.map(browser => {
                return browser[0]
            })
            let browserReadableNames = browserNames.map(browser => {
                return this.getBrowserName(browser)
            })
            return browserReadableNames
        }
    }
}
