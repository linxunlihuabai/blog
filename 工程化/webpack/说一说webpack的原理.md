# webpack原理

webpack是js静态模块打包器，webpack从入口文件开始，递归的构建出一个模块依赖图，将这些模块打包成一个或者多个bundle。

webpack的4个核心

1. entry 入口
2. output 出口
3. loader 加载器，用来处理一些非js的文件，因为webpack自身只能处理js。比如css-lodaer、url-loader
4. plugin 插件，丰富webpack的功能。比如打包优化、代码压缩等