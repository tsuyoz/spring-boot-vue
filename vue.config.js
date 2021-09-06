const path = require("path")

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "/src/main/vue"), // エイリアスの設定
            },
        },
    },

    outputDir: "src/main/resources/static", // ビルド結果の出力先
    pages: {
        index: {
            entry: "src/main/vue/main.ts",
            template: "src/main/vue/public/base.html",
            filename: "index.html",
        },
    },

    // 開発サーバーの設定
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:8080",
            },
        },
        port: 8090,
    },
}
