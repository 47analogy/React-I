module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },

    {
    "extends": "react-app",
        "plugins": ["prettier"],
            "rules": {
        "prettier/prettier": "error"
    }
},

"plugins": [
    "react"
],
    "rules": {
    "indent": [
        "error",
        2
    ],
        "linebreak-style": [
            "error",
            "unix"
        ],
            "quotes": [
                "error",
                "single"
            ],
                "semi": [
                    "error",
                    "always"
                ]
}
};
