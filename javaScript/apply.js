Function.prototype.apply2 = function(context, arr) {
    context = Object(context) || window;
    context.fn = this;

    if(!arr){
        context.fn();
    }else{
        var args = [];
        for(let i = 0; i < arr.length; i++){
            args.push('arr['+i+']');
        }
        var result = eval('context.fn('+args+')');
    }

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

var result = bar.apply2(foo,['name',12]); 
console.log(result);