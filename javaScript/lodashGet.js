function _get(obj,path,defaultValue){
    var paths = path.replace(/\[(\d+)\]/g,'.$1').split('.');
    var result = obj;
    for(const p of paths){
        result = Object(result)[p];
    }
    return result;
}

var obj = {
    a:1,
    b:{c:'c'},
    d:{e:['f',['g']]}
}
console.log(_get(obj,'b.c.d'))