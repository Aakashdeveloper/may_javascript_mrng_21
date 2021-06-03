//local scope
//global scope

//enclose something
/*
var a = 10;
function add(){
    var b = 20
    return a+b
}

console.log("a>>>",a)
console.log("b>>>",b)
console.log(add())

/*
// variable that can be access outside the curly bracket and inside also that is in global
// variable that can only be access inside curly bracket that is in local
*/

/*

var a;
function add(){
    a = 20
    console.log("<<<<<a inside>>>>>>",a)
    var b = 20
    return a+b
}

console.log("a outside>>>>>>",a)
console.log(add())
console.log("b>>>",b)
*/

var a= 10
for(i=0;i<5;i++){
    let b = 20
    console.log(a+b+i)
}

console.log("a outside>>>>>>",a)
console.log("b>>>",b)