module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
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