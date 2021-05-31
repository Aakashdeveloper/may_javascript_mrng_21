var a = 10
var b = 20
a+b
30

////////////////
function
method
arrow function
iffi 
generator
////////////

//functions//
function add(a,b){
    return a+b
}
add(1,2)
3
add(76,876)
952
add('a','b')
"ab"
add(1)
NaN
add(76,876,1)
952


function add(a,b){
    console.log("a>>>",a)
    console.log("b>>>",b)
    return a+b
}
undefined
add(1)
VM237:2 a>>> 1
VM237:3 b>>> undefined
NaN
1+undefined
NaN
1+null
1

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd` 
    }
    return out
}

isEven(3)
"Number 3 is odd"
isEven(2)
"Number 2 is even"

///////////////
function test(a,b){
    return a,b
}

test(1,2)
2

test("hii","bie")
"bie"

function test(a,b){
    return b,a 
}

test("hii","bie")
"hii"
function test(a,b){
    return a,b
}
undefined
test("hii","bie")
"bie"

> one function cannot return more than one value

function test(a,b){
    var out = [a,b]
    return out
}

test(1,2)
(2) [1, 2]

///es6
/// Rest 
function add(...args){
    console.log(args)
}
add(1,2,4,6,8)
[1, 2, 4, 6, 8]


function add(...args){
    let sum = 0
    for(data of args){
        sum = data+sum
    }
    return sum
}
add(1,3,7,3,2)
16
add(1,3)
4
add(1,3,7,3,2,4,6,3,5)
34

////////
method > when function assign to variable
//////
var add = function(a,b){
    return a+b
}

add(1,2)

/////es6///
///arrow function////
let add = (a,b) => { return a+b }
add(1,2)
3

let add = (...args) => { return a+b }