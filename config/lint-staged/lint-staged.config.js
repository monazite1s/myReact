module.exports = {
	'*.{js,jsx,ts,tsx}': [
		'eslint -c ./eslint.config.mjs --fix --quiet ./packages',
		'prettier --config ./config/prettier/prettier.config.js --write'
	],
	'*.json': ['prettier --config ./config/prettier/prettier.config.js --write']
	// '*.{scss,less,html}': ['stylelint --fix', 'prettier --write'],
	// '*.md': ['prettier --write']
};
