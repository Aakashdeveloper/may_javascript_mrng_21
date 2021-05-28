for
while
do while
for of
for in 
map
filter

/////////////
for> generate series of value or help to iterate over array
//////////

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London","Delhi","NewYork","Paris"]
for(i=0;i<city.length;i++){
    console.log(`${city[i]}`)
}

London
Delhi
NewYork
Paris


for(i=0;i<5;i++){    
    for(j=0;j<5;j++){   
        console.log(i+j)   0
    }
}
0 < 0
1


var myarray = ["Amsterdam", "Dubai",["Bmw","Audi","Skoda"], "Edinberg", "London", "Mumbai"]

for(i=0;i<myarray.length;i++){ 
    if(Array.isArray(myarray[i])){
        for(j=0;j<myarray[i].length;j++){
            console.log(myarray[i][j])
        }
    }else{
        console.log(myarray[i])
    }
    
}

