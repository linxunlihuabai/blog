# HTTPS和HTTP的区别

1. HTTP是明文传输，数据容易被窃取和篡改；HTTPS在HTTP的基础下加了一层安全层（SSL/TSL）,所有数据都需要经过安全层进行加解密，数据更安全
2. HTTP使用的是80端口，HTTPS使用的是443端口
3. HTTPS需要申请CA证书，一般需要付费；HTTP不用

# HTTPS 工作流程

1. 客户端申请https通信
2. 服务端响应并发送带有公钥的证书给客户端
3. 客户端验证证书的有效性后，生成对称加密密钥，并用证书中的公钥进行加密发送给服务端
4. 服务端用私钥进行解密得到对称加密密钥，并通知客户端Https通信已建立
5. 之后客户端和服务端就可以利用对称加密密钥进行加密通信
6. 最后断开连接

# 什么时候用对称加密，什么时候用非对称加密

非对称加密用来加密对称密钥；对称加密用来数据传输

# 为什么不直接用非对称加密

1. 性能消耗更大
2. 对数据的长度有限制


# HTTPS的优缺点

优点

1. 数据传输更安全
2. 有利于SEO优化

缺点

1. 增加了SSL/TSL的握手时间，延长了页面的加载时间，增加了数据开销
2. 申请CA证书需要花钱，增加了成本
