module.exports = {
    data: {
        "key": "",
        "name": "medicalRecords",
        "b_v": 0,
        "m_v": 0.0,
        "url": "",
        "hash": "",
        "size": 0
    },
    framework: 'vue',
    offline: false,
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
