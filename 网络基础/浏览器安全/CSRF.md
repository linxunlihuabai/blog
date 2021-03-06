# CSRF攻击

CSRF的全称是跨站请求伪造，主要攻击手段就是诱导用户进入第三方网站，然后在第三方网站向被攻击网站发送请求，利用用户已经在被攻击网站的凭证，绕过后台的验证，冒充用户进行恶意操作。恶意网站发送请求的方式可能有：利用图片发送GET请求、利用form自动发送请求、诱导点击发送请求。

CSRF并不会直接获取用户的cookie，只是利用用户的cookie冒充用户进行恶意操作。

## 如何防范CSRF攻击

1. 验证码 适用于一些谨慎的操作（转账之类的），通过输入验证把能够保证是用户预期的操作
2. 通过请求头的Origin和Referer字段验证请求的来源
3. CSRF Token：CSRF攻击之所以能够成功就是因为服务端把请求当成是用户自己发起的，那么我们可以让用户的所有请求都携带一个无法被获取的token。那么服务端就能根据请求中的token区分出正常请求和攻击请求了。
4. 利用Cookie的Same-site属性。CSRF攻击中最重要的一环就是利用请求会携带上用户的cookie，所以我们可以将Cookie的Same-site属性设置为 Strict（完全禁止非同站的cookie）或者Lax（允许表单的GET请求和超链接的GET请求携带Cookie）。