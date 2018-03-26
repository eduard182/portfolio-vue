var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

modul.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return

        return {
            plugins: PrerenderSpaPlugin(
                path.resolve(__dirname, 'dist'),
                
        [ '/', '/about', 'project/zero', 'project/one', 'project/two']
            )
        }
    }
}