# 在一个html中的id是container的容器下面的大于等于4层的img上加class

思路：深度遍历

用递归可以很轻易的写出来，面试时一直想着怎么迭代导致没有写出来！！！

```js
function addImgClass() {
    let container = document.getElementById('container');

    let childs = container.children;

    function help(element, n) {
        if(!element) return;
        if (element.tagName === 'IMG' && n >= 4) {
            element.classList.add('aa')
        } else {
            for (let ele of element.children) {
                help(ele, n + 1)
            }
        }
    }

    for (let element of childs) {
        help(element, 1)
    }
}
```