# 细说浏览器输入URL后发生了什么?

1. DNS解析 - 在用户输入URL后会先有一个递归查找DNS的过程：浏览器缓存->本地host文件-> 本地DNS服务器。只要这个过程中任何一步找到了都会停止查找。如果本地DNS服务器也没找到，就会从根域名服务器->顶级域名服务器->权威域名服务器开始迭代查找。递归查找和迭代查找的区别：递归查找是只自己没找到，就帮你去找；迭代查找就是自己没找到，就把别的服务器告诉你，你自己去找。
2. DNS解析完以后就开始建立TCP连接了（三次握手），如果是https还需要进行ssl握手。
3. TCP连接建立后，浏览器就可以发送HTTP请求了。(当发送请求之前，还需要查询浏览器缓存。浏览器的缓存分为强缓存和协商缓存，首先会根据请求头信息判断是否命中了强缓存，如果命中了就不会发送请求到服务器。如果强缓存没命中，则会向服务器发起请求，判断是否命中了协商缓存，如果命中了协商缓存，服务器会返回304状态码，表示资源未更新，可以使用缓存中的资源, 如果没有命中，服务器就会返回新的资源)
4. 服务器处理请求，返回响应结果
5. 4次挥手断开TCP连接
6. 最后就是浏览器渲染页面的步骤了
    1. 解析HTML文档构建DOM树。在解析HTML文档的过程中，还会遇到一些外部资源的加载，如果是js的加载，则它会阻塞HTML的解析，如果是其他资源则不会阻塞HTML的解析。
    2. 解析CSS构建CSSOM树
    3. 将DOM和CSSOM树结合生成布局树，在这个过程中如果有操作对元素的颜色，背景有影响就会触发重绘，如果对元素大小布局有影响就会触发回流。
    4. 将布局树进行分层，并生成分层树（为了一些复杂的3D效果，形成一个单独的图层）
    5. 为每个图层生成绘制列表，然后将绘制列表交给合成线程处理，合成线程将图层划分为图块，接着把图块转换成位图
    6. 然后合成线程生成一个绘制图块的命令发给浏览器进程，最后浏览器根据命令生成页面显示。


创建布局树，遍历 DOM 树中的所有可见节点，并把这些节点加到布局中；而不可见的节点会被布局树忽略掉，如 head 标签下面的全部内容，再比如 body.p.span 这个元素，因为它的属性包含 dispaly:none，所以这个元素也没有被包进布局树。最后计算 DOM 元素的布局信息，使其都保存在布局树中。布局完成过程中，如果有js操作或者其他操作，对元素的颜色，背景等作出改变就会引起重绘，如果有对元素的大小、定位等有改变则会引起回流。

因为页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树。

渲染引擎实现图层的绘制，把一个图层的绘制拆分成很多小的绘制指令然后再把这些指令按照顺序组成一个待绘制列表，当图层的绘制列表准备好之后，主线程会把该绘制列表提交给合成线程，合成线程会将图层划分为图块，然后按照视口附近的图块来优先生成位图(实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图)

一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令，然后将该命令提交给浏览器进程,浏览器最后进行显示。

    
