import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

// 定义包路径和输出路径
const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

/**
 * 根据包名和是否为输出路径，返回对应的路径
 * @param {string} pkgName - 包名
 * @param {boolean} isDist - 是否为输出路径
 * @returns {string} - 解析后的路径
 */
export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

/**
 * 获取指定包的 package.json 内容
 * @param {string} pkgName - 包名
 * @returns {Object} - 解析后的 package.json 对象
 */
export function getPackageJSON(pkgName) {
	// 包路径
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}

/**
 * 获取基础的 Rollup 插件配置
 * @param {Object} [options={}] - 配置选项
 * @param {Object} [options.typescript={}] - TypeScript 插件配置
 * @returns {Array} - Rollup 插件数组
 */
export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
