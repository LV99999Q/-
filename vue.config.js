module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://127.0.0.1:7900',
                // target: 'http://192.168.0.128:7900',
                // target: 'http://192.168.0.126:7900',
                // target:'http://192.168.0.133:7900',
                // target:'http://192.168.0.113:7900',
                // target:'http://192.168.0.116:7900',
                // target:'http://192.168.0.141:7900',
                target:'http://192.168.0.107:7900', //刚哥
                // target:'http://192.168.0.119:7900', 
                // target:'http://192.168.0.151:7900',  //本地测试
                // target:'http://222.212.91.20:8900', //外网地址
                // changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 打包后静态资源路径
    publicPath: './',
};