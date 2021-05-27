// Array is a collection of homogenious or hetrigenious data type

var a = [1,3,5,33,67] (Array of number)
var b = ['dgds','dgdf','3r3fw','dfw4'] (array of string)
var c = [true,false,false,true] (array of Boolean)

var d = [3,4,'c','dgdf',35,true,false,'sdg']

var city = ["London","Delhi","NewYork","Paris"]
typeof(city)
"object"


var city = ["London","Delhi","NewYork","Paris"]
undefined
city[0]
"London"
city[1]
"Delhi"
typeof(city[0])
"string"
city.length
4
city[city.length-1]
"Paris"

city[3]
"Paris"

var city = ["London","Delhi","NewYork","Paris"]
undefined
city.push('Amsterdam')
5
city
(5) ["London", "Delhi", "NewYork", "Paris", "Amsterdam"]
city.push('Dubai','Venice')
7
city
(7) ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai", "Venice"]

var city = ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai", "Venice"]
undefined
city.pop()
"Venice"

["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
city.pop(2)

var city = ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai", "Venice"]
undefined
city.pop()
"Venice"
city
(6) ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
city.pop(2)
"Dubai"
city
(5) ["London", "Delhi", "NewYork", "Paris", "Amsterdam"]
city.pop(200000)
"Amsterdam"

var city = ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
undefined
city.shift()
"London"
city.unshift('Helsinki')
6
city
(6) ["Helsinki", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]


push > add in the end of the array
unshift > add in the begining of the array
pop> always remove the last value of array
shift> always remove the first value of array


var city = ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
undefined
city.slice(1)
(5) ["Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
city.slice(2)
(4) ["NewYork", "Paris", "Amsterdam", "Dubai"]0: "NewYork"1: "Paris"2: "Amsterdam"3: "Dubai"length: 4__proto__: Array(0)
city
(6) ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]
city.slice(2,5)
(3) ["NewYork", "Paris", "Amsterdam"]

splice(startIndex, deletecount, values)


var city = ["London", "Delhi", "NewYork", "Paris", "Amsterdam", "Dubai"]

// on index no2 delete 2 values
city.splice(2,2)
(2) ["NewYork", "Paris"]
city
(4) ["London", "Delhi", "Amsterdam", "Dubai"]

// on index no 1 don't delete but add 2 value
city.splice(1,0,'Mumbai','Nice')
[]
city
(6) ["London", "Mumbai", "Nice", "Delhi", "Amsterdam", "Dubai"]

// on index no 3 delete 1 value and add 1 value
city.splice(3,1,'Edinberg')
["Delhi"]
city
(6) ["London", "Mumbai", "Nice", "Edinberg", "Amsterdam", "Dubai"]


var a = ['a','b','c',1]
var b = [1,2,3]
a+b
"a,b,c,11,2,3"

var b = [1,2,3]
undefined
a.concat(b)
(7) ["a", "b", "c", 1, 1, 2, 3]