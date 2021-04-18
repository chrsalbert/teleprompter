export default async ({ store, app, route}, inject) => {
  inject('isSupportingSpeechRecognition', () => {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
  })
}
