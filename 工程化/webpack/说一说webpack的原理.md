# webpack原理

webpack是js静态模块打包器，webpack从入口文件开始，递归的构建出一个模块依赖图，将这些模块打包成一个或者多个bundle。

webpack的4个核心

1. entry 入口
2. output 出口
3. loader 加载器，用来处理一些非js的文件，因为webpack自身只能处理js。比如css-lodaer、url-loader
4. plugin 插件，丰富webpack的功能。比如打包优化、代码压缩等


# webpack5新特性

1. 剔除了npm包里针对nodejs模块自动引用的polyfill，更好的tree shaking，同时增加了对commonjs的tree shaking，优化了打包体积
2. 长期缓存优化，采用了确定性moduleId和chunkId；通过真实内容生成hash，添加注释和变量名修改时不会改变。
3. 构建速度优化，缓存生成的webpack模块和chunk，改善构建速度
4. 模块联邦：允许运行时动态决定代码的引入和加载，能够让一个应用从另一个应用中动态加载模块