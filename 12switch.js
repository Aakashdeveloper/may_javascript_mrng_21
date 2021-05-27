// multiple condition and multiple output(ifelse)
// one condition and one output(ternary)
// one condition and multiple output (switch)

var name = "Eva"

switch(name){
    case 'Aakash':
        console.log(`hi case 1 ${name}`) 
        break;
    case 'Eva':
        console.log(`hi case 2 ${Eva}`) 
        break;
    default:
        console.log(`hi default case`) 
}


var input  = 2

switch(input%2){
    case 0:
        console.log(`Number is even`) 
        break;
    case 1:
        console.log(`Number is odd`) 
        break;
    default:
        console.log(`hi default case`) 
}


switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`)
        break;
    case 4:
        console.log(`Today is thursday`)
        break;
    default:
        console.log(`Invalid input`)
}
