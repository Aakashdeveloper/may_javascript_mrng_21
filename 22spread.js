function add(a,b,c,d){
    return a+b+c+d
}


var num = [1,2,3,4]

console.log(add(num))

num.map((data) => {add(data)})
function add(a,b,c,d){
    return a+b+c+d
}

var num = [1,2,3,4]
undefined
add(num)
"1,2,3,4undefinedundefinedundefined"
num.map((data) => {add(data)})
(4) [undefined, undefined, undefined, undefined]
num.map((data) => {return add(data)})
(4) [NaN, NaN, NaN, NaN]


for(i=0;i<num.length;i++){
    add(i)
}
NaN


function add(a,b,c,d){
    return a+b+c+d
}

var num = [1,2,3,4]
add(...num)
10


function add(...args){
    return a+b+c+d
}



function add(...args){
    let sum = 0
    for(data of args){
        sum = data+sum
    }
    return sum
}

var num = [1,2,3,4]
add(...num)

var num = [1,2,3,4]
console.log(...num)
VM244:1 1 2 3 4

var cars = ['Kia','BMW','Volvo']
var car2= ['Sokda','Merc','Audi','Nexa']
output = ['Sokda','Merc',...cars,'Audi','Nexa']
(7) ["Sokda", "Merc", "Kia", "BMW", "Volvo", "Audi", "Nexa"]