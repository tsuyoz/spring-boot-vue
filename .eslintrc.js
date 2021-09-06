module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/standard",
        "@vue/typescript/recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        // ダブルコーテーションを強制
        quotes: ["error", "double"],
        // セミコロンなし
        semi: ["error", "never"],
        // インデント
        indent: ["error", 4, { SwitchCase: 1 }],
        //
        "object-curly-spacing": "off",
        //
        "comma-dangle": "off",
    },
}
