//babel实现编译，我们实现运行时

/*
    1. 实现jsx方法
        a. jsx DEV方法
        b. jsx方法（prod环境）
        c. React.createElement方法
    2. 实现打包流程
    3. 实现调试打包结果的环境
*/

import { jsxDEV } from 'react/src/jsx';
export default {
	version: '0.0.0',
	createElement: jsxDEV
};
