module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,html,svelte,css}'
	],
	swDest: 'static/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};