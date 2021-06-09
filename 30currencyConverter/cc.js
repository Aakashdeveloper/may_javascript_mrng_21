const url = "http://data.fixer.io/api/latest?access_key=10b816fb390183d161cc164e53490b9c";

//es5
/*
function convert(){
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    // call api
    fetch(url, {method:'GET'})
    // return promise
    .then((res) => res.json())
    // reslove promise and return data
    .then((data) => {
        var final = data.rates[out]*Number(amount)
        var result = `Converted Value of ${amount} Eur is ${final} ${out}`
        document.getElementById('output').innerText = result
    })
}*/

//es6
async function convert(){
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var response = await fetch(url, {method:'GET'})
    var data = await response.json()
    var final = data.rates[out]*Number(amount)
    var result = `Converted Value of ${amount} Eur is ${final} ${out}`
    document.getElementById('output').innerText = result
}