# Cookie

Cookie是为了解决http无状态的问题而出现的。在客户端向服务端请求时，服务端会通过response的Set-Cookie向客户端写入带有状态信息的cookie，浏览器接收到响应后会自动保存这份cookie，然后下次请求就会携带上这个cookie。服务端就可以根据cookie信息获取状态了。

## Cookie的属性

### 生存周期

1. Expires: 过期的具体时间
2. Max-age：从接收到报文开始，多少秒后过期 Max-age的优先级更高

### 作用域

1. domain - 标识了哪些域名可以访问该cookie，默认是当前访问地址的主机部分*不包含子域名*。比如 a.com下面的cookie b.a.com是访问不到的。如果设置了domain，则可以访问子域名。如果设置了 domain=a.com 此时的b.a.com就可以访问a.com的cookie了。注意：并不能跨域设置cookie，比如在b.com下把domain设成a.com是无效的。
2. path - 标识了那些路径可以访问该cookie，默认为请求url的路径。如果一个 cookie 带有 path=/admin 设置，那么该 cookie 在 /admin 和 /admin/something 下都是可见的，如果设置为'/'则表示该域名下的所有路径都可以访问。

### 安全相关

1. Secure - 带有Secure表示该cookie只能通过https传输
2. HttpOnly - 带有HttpOnly表示该cookie只能通过http传输，不能通过js访问。这个标识可以用来防止XSS攻击。

同时也有预防CSRF的属性SameSite。

CSRF攻击就是利用cookie信息完成一些危险的操作。比如你登录银行的网址bank.com,这时候浏览器已经保存了含有你身份信息的cookie。然后你不小心打开了一个危险网站b.com。这个危险网站利用form表单（跨域不包括form表单的请求）向银行的网站bank.com发送了一个请求，因为每次向bank.com发送请求都会携带上cookie，bank.com验证了这个cookie没问题，就认为这个操作是你自己做的。

SameSite就是通过限制从第三方发出的请求中的cookie来预防CSRF攻击。SameSite属性有三个值 Strict Lax None。

1. Strict - 完全禁止第三方发送的请求携带该cookie。
2. Lax - 更宽松一点，允许第三方的部分请求操作携带该cookie。（导航到目标网址的get请求：超链接、get表单）
3. None - 不阻止第三方请求携带该cookie

## Cookie的作用

1. 会话状态管理 （如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2. 个性化设置（用户自定义设置、主题等）
3. 浏览器行为跟踪（分析用户行为）

## Cookie的缺点

1. 存储的数据大小容量有限
2. 不安全，容易被截取、篡改。
3. 增加请求的大小，增加网络开销