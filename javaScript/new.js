function New(){
    var constructor = Array.prototype.shift.call(arguments);
    var obj = {};
    obj.__proto__ = constructor.prototype;
    var res = constructor.apply(obj,arguments);
    return typeof res === 'object' ? res : obj;
}

// function Otaku (name, age) {
//     this.name = name;
//     this.age = age;

//     this.habit = 'Games';
// }

// Otaku.prototype.strength = 60;

// Otaku.prototype.sayYourName = function () {
//     console.log('I am ' + this.name);
// }

// var person = New(Otaku, 'Kevin', '18')

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin

function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = New(Otaku,'Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined