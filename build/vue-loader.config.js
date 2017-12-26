module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
	  require('postcss-salad')({
		  browsers: ['ie > 8', 'last 2 version']
      })
  ]
}
