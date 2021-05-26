var  > we are able to redeclare and reassign
let  > we cannot redeclare but we can reassign
const > we cannot redeclare but nor reassign


var a = 10

var a > declare 
a = 10 > assignment

> a
10
> var a = 12
undefined
> a
12
> a = 13
13
> a
13
> 

let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b =21
21

> const c = 10
undefined
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.