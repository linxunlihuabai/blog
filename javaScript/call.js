Function.prototype.call2 = function(context,...args){
    context = context || window;
    context.fn = this;
    // var args = [];
    // for(let i = 1;i<arguments.length;i++){
    //     args.push('arguments['+i+']');
    // }

    // var result = eval('context.fn('+args+')');
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
    return 'return obj'
}

var result = bar.call2(foo,'name','age'); 
console.log(result);