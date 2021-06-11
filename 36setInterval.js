setInterval(function(){
    console.log("hiii")
},5000)

var mytest = setInterval(function(){
    console.log("hiii")
},5000)


clearInterval(mytest)


var mytest = setInterval(function(){
    console.log(Math.random())
},5000)

0.8981131195233512
VM90:2 0.5930733600192755
VM90:2 0.9142132514111985
VM90:2 0.17516664464665577
VM90:2 0.7416946268668312
VM90:2 0.39235329137773833
VM90:2 0.8157315298400771
VM90:2 0.23155374075175317
VM90:2 0.6626191447536363
clearInterval(mytest)

////////////////
setTimeout(function(){
    console.log(Math.random())
},5000)
0.276609638781973