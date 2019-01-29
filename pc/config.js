module.exports = {
    // component: true,
    framework: 'vue',
    devServer: {
        // contentBase: path.resolve(''),
        // publicPath: './',
        disableHostCheck: true,
        host: '0.0.0.0',
        // port: 9999,
        proxy: {
            '/test': {
                target: 'http://www.baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/test': ''
                }
            }
        }
    }
}