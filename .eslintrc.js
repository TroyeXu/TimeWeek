module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jquery": true,
		"mocha": true,
		"commonjs": true
	},
	"globals": {
		"_": false // Lodash library
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/strongly-recommended"
	],
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"indent": [
			"warn",2

		],
		"linebreak-style": [
			"warn",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"no-debugger": process.env.NODE_ENV === "production" ?
			"error" : "off",
		"no-console": process.env.NODE_ENV === "production" ?
			"error" : "off", // allow debugger during development
		"generator-star-spacing": "off", // allow async-await
		"vue/html-indent": ["error", 2],
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "never",
				"normal": "any",
				"component": "any"
			},
			"svg": "always",
			"math": "always"
		}],
		"vue/max-attributes-per-line": "off",
		"vue/v-on-style": [1, "longform"],
		"vue/v-bind-style": [1, "longform"]
	}
};