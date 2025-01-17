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
        node: true,
        es6: true
    },
    globals: {
        __static: true
    },
    "settings": {
        "pragma": "React",
        "version": "detect",
    },
}