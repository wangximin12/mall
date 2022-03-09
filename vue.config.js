module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            // 配置后缀,默认.vue.js.json
            extensions: [],
            // 别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
            },
        },
    },
}