module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
	'*.json': ['prettier --write'],
	'*.{scss,less,html}': ['stylelint --fix', 'prettier --write'],
	'*.md': ['prettier --write']
};
