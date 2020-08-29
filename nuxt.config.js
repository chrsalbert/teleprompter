
module.exports = {
	/*
	** Nuxt rendering mode
	** See https://nuxtjs.org/api/configuration-mode
	*/
	mode: 'universal',
	/*
	** Nuxt target
	** See https://nuxtjs.org/api/configuration-target
	*/
	target: 'server',
	/*
	** Headers of the page
	** See https://nuxtjs.org/api/configuration-head
	*/
	head: {
		htmlAttrs: {
			lang: 'de'
		},
		title: 'Mr. Prompter – your free online teleprompter',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900' },
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Global CSS
	*/
	css: [
		'~assets/css/style.css'
	],
	/*
	** Plugins to load before mounting the App
	** https://nuxtjs.org/guide/plugins
	*/
	plugins: [
		{ src: '~/plugins/socket.io-client.js', ssr: false },
		{ src: '~/plugins/helpers.js' }
	],
	/*
	** Auto import components
	** See https://nuxtjs.org/api/configuration-components
	*/
	components: true,
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/svg',
		'@nuxtjs/pwa',
		'@nuxtjs/device',
		'cookie-universal-nuxt'
	],
	env: {
		WS_URL: process.env.WS_URL || 'http://localhost:3000',
		BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
		READABLE_URL: 'mrprompter.herokuapp.com'
	},
	/*
	** Build configuration
	** See https://nuxtjs.org/api/configuration-build/
	*/
	build: {
	},
	telemetry: false,
	pwa: {
		manifest: {
			name: 'Mr. Prompter',
			lang: 'en',
			useWebmanifestExtension: false,
			description: "Mr. Prompter is an onlne teleprompter. It scrolls your script while you're speaking. That makes you sound more natural to your audience."
		},
		meta: {
			appleMobileWebAppStatusBarStyle: 'black-translucent',
			author: 'Christin Albert',
			theme_color: '#0000FF',
			ogTitle: 'Mr. Prompter'
		}
	}
}
