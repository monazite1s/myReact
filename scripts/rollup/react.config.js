import { getBaseRollupPlugins } from './utils';
import { getPackageJSON, resolvePkgPath } from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const { name, module } = getPackageJSON('react');
console.log(getPackageJSON('react'));
console.log('name:', name);
console.log('module:', module);
// react包路径
const pkgPath = resolvePkgPath('react');
// 输出路径
const pkgDistPath = resolvePkgPath('react', true);

export default [
	// react 包
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'React',
			format: 'umd'
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime 包
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			// jsx-runtime 包的 esm 格式
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			},
			// jsx-runtime 包的 cjs 格式
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			}
		],
		plugins: getBaseRollupPlugins()
	}
];
