function deboundce(fn,wait,immediate){
    var timeout;
    var result;
    function deboundced(){
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        if(immediate){
            if(!timeout){
                result = fn.apply(context,args);
            }

            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
        }else{
            timeout = setTimeout(() => {
                fn.apply(context,args);
            }, wait);
        }
        return result;
    }

    deboundced.onCancel = function() {
        clearTimeout(timeout);
        timeout = null;
    }

    return deboundced;
}

var container = document.getElementById('container');
var cancel = document.getElementById('cancel');
var count = 1;

function setContainer(e) {
    console.log(e, this);
    container.innerText = count++;
}

var deboundceFn = deboundce(setContainer, 1000, true);


document.onmousemove = deboundceFn;
cancel.onclick = deboundceFn.onCancel;

// 防抖的使用场景？

// 对于一些频繁触发的事件，减少触发频率，以此进行优化。比如搜索框的输入