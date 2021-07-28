Function.prototype.bind2 = function(context){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    var fn = function(){};
    var boundFn = function(){
        var boundArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof boundFn ? this:context,args.concat(boundArgs));
    }
    fn.prototype = this.prototype;
    boundFn.prototype = new fn();
    return boundFn;
}

var foo = {
    value: 1
};

function bar(name, age,sex) {
    this.sex = sex;
    console.log(name)
    console.log(age)
    console.log(this.value,this.sex);
    return 'return obj'
}

bar.prototype.skill = '篮球';

var fn1 = bar.bind2(foo, 'name1'); 
var fn2 = bar.bind2(foo, 'name2','age2'); 
console.log(fn1('age1'));
var obj = new fn2('nan');
console.log(obj.sex,obj.skill,'obj');