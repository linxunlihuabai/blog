# HTML 阻塞问题

1. js的加载和执行会阻塞后续html的解析和渲染（因为js线程和GUI线程是互斥的，js中是可以操作dom，如果一边操作dom，一边渲染就可能出现问题）。不会阻塞前面的html解析和渲染，如果js前面没有css加载，会先渲染前面的html。
2. css的加载不会阻塞html解析，但会阻塞html的渲染。（因为渲染需要把DOM tree 和CSSOM tree 结合成render tree）
3. css的加载会阻塞js的执行, 因此如果css后面有js，也会阻塞html的解析和渲染。