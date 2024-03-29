const pkg = require('./package');

module.exports = {
	mode: 'universal',

	/*
  ** Headers of the page
  */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },

	/*
	** Global CSS
	*/
	css: ['~/assets/style/app.styl'],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: ['@/plugins/vuetify', '@/plugins/global', '@/plugins/axios'],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		[
			'@nuxtjs/axios',
			{
				baseURL: 'http://localhost:8000/api',
				headers: {
					'content-type': 'application/json'
				}
			}
		],
		'@nuxtjs/proxy',
		'nuxt-validate',
		'cookie-universal-nuxt'
	],
	/**
	 *
	 */
	toast: {
		position: 'top-right'
	},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
