function human(name){
    this.name = name;
    this.city = "London"
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john = new human('John')
john
human {name: "John", city: "London"}

var pepper = new robot('Pepper')
pepper
robot {name: "Pepper", legs: 2, age: 10}

human.prototype = new robot()


human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}age: 10legs: 2name: undefined__proto__: Object
var keev = new human('Keev')
undefined
keev
human {name: "Keev", city: "London"}city: "London"name: "Keev"__proto__: robot
keev.legs
2
keev.age
10