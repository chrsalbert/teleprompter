export default {
    methods: {
      countWords (text = '') {
        // var text = text
        // text = text.replace(/<\/?[^>]+(>|$)/g, '') // remove html tags
        // text = text.replace(/(^\s*)|(\s*$)/gi,'') //exclude  start and end white-space
        // text = text.replace(/[ ]{2,}/gi,' ') //convert 2 or more spaces to 1  
        // text = text.replace(/\n /,'\n') // exclude newline with a start spacing
        // return text.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g).length
        return 200
      },
      getReadingDurationInSec (text = '', wordsPerMin = 0) {
        const wordCount = this.countWords(text)
        var readingDuration = (wordCount / this.wordsPerMin).toFixed(2)
        var seconds = readingDuration.toString().split('.')
        return Math.floor(seconds[1] * 0.6 + seconds[0] * 60)
      }
    }
  }