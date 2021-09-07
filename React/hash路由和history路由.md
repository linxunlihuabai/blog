# hash路由和history路由

hash路由监听url中hash的变化，修改渲染内容，这种路由不会把#和后面的内容发送给服务端，因此不需要服务端支持

history路由通过监听url中的路径变化，刷新时会真实的请求全路径，所以需要服务端的支持（nginx对资源进行重定向）

# hash路由的实现原理

hash路由是通过监听hashchange事件来判断路由是否发生了变化。

# history路由的实现原理

history路由的实现是通过window.history的api实现的，常见方法有

1. back(): 回退到上一个路由
2. forward(): 前进到下一个路由
3. go(number): 到任意一个路由，正数为前进，负数为后退
4. pushState(obj, title, url): 前进到指定路由，不刷新页面
5. replaceState(obj, title, url): 用url替换当前的路由，不刷新页面

通过这几个api就可以实现无刷新切换url，同时也不会向后端发生请求。

同时通过popState监听路由的变化。但是调用history.pushState()或history.replaceState()不会触发popstate事件。针对这种情况，我们可以采用改写一下pushState方法来实现，思路是在history添加一个onpushState属性，在pushState时进行调用即可。

```js
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        return pushState.apply(history, arguments);
    };
})(window.history);

//设置其方法和popstate相同即可
window.onpopstate =history.onpushstate= function(event) {
      alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
```