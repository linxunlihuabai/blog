# HTTP1.1 有哪些问题

1. 队首阻塞 - 前面请求的响应没有完成就会阻塞后面的请求
3. 低效的TCP利用 - 因为TCP的慢启动机制，导致每个TCP连接再一开始的传输速率都不高，在处理多个请求后才会慢慢达到最合适的效率。这对于数据量很小的http请求很难受。
2. 臃肿的头部 - HTTP1.1的首部无法压缩，在加上cookie的存在，有时候首部比body还大
3. 无法设置请求优先级 - HTTP1.1无法设置请求的优先级，都是一视同仁。

# HTTP2有哪些改进

1. 二进制分帧
2. 报头压缩
3. 多路复用
4. 请求优先级
5. 服务器推送

## 报头压缩

HTTP2会在客户端和服务端都建议一张哈希表，然后再请求和响应中只存放对应的索引，客户端和服务端再接收到后就利用索引去查哈希表并还原出完整的头部。这样可以大大减少头部的大小，可以达到很高的压缩率。

## 多路复用

在HTTP1.1中存在着队首阻塞的问题，前一个请求没有得到响应，就会阻塞住后面的请求。虽然可以利用并发请求和域名分片减缓这种情况，但问题依然存在。并且这种解决办法也有问题，会让多条TCP连接竞争有限的带宽，让真正优先级高的请求不能优先处理。

在HTTP2中数据格式从文本变成了二进制。多路复用就是利用了这一特性，所有的请求都在一个TCP连接上传输，报文被分割成一个个二进制帧，每个二进制都有一个流id标识自己属于哪一个流，这样不同流之间的二进制帧就可以乱序发送，最后在另一端根据流id再重新组合起来。(这里的乱序指的是不同流id的帧之间可以乱序，但是同一个流id的帧之间是有顺序的)这样一来多个请求和响应之间就可以交错，不会发生阻塞，从而解决了HTTP1.1队首阻塞的问题了。

## 请求优先级

同时对于这些二进制帧也可以设置优先级，让服务器先处理优先级高的资源，优化用户体验

## 服务器推送

HTTP2中服务器不再是完全被动接受请求、响应请求了，它也可以主动给客户端推送消息。比如客户端请求一个HTML文件，服务端除了返回这个HTML文件外，还可以把HTML中引用的一些资源主动推送给客户端。


# HTTP2的优缺点

优点

1. 报头压缩
2. 多路复用
3. 设置请求优先级
4. 服务器推送

缺点

1. 多路复用是基于一个TCP连接的，如果发生了TCP队头阻塞（TCP层面丢包，因为TCP是可靠的，它需要等待丢失数据的超时重传，所以会阻塞后面的数据），就会阻塞掉后面所有的请求，效果还不如HTTP1.1多个TCP连接。


# HTTP3

为了解决TCP队头阻塞的问题，谷歌推出了一个新的协议QUIC。这协议是基于UDP实现一套可靠的传输协议（重新实现一套 tcp 机制、确认重传，拥塞控制），让HTTP跑在QUIC上，这样HTTP不用TCP就自然不存在TCP的队首阻塞问题了。



