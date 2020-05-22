module.exports = {
    /* your base configuration of choice */
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    globals: {
        __static: true
    }
}