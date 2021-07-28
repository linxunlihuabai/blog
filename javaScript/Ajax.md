ajax是一种动态web应用开发技术，使用ajax可以和后台异步交互数据，实现页面局部刷新，提高用户体验。

```js
var xhr = new XMLHttpRequest();
xhr.open('Get','https://www.baidu.com');
xhr.onreadystatechange= function(){
    if(xhr.readyState === 4){
        console.log(xhr.status,'status')
    }
}
xhr.send();
```