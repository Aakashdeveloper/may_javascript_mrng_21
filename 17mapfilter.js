var a = [4,5,7,3,8,9,11,21,53]
a.map((data) => { console.log(data)})

var a = [4,5,7,3,8,9,11,21,53]
a.map((data) => { return data})
(9) [4, 5, 7, 3, 8, 9, 11, 21, 53]

var a = [4,5,7,3,8,9,11,21,53]
a.map((data) => { return data*2})
 [8, 10, 14, 6, 16, 18, 22, 42, 106]

var a = [4,5,7,3,8,9,11,21,53]
a.map((data) => { return `<p>${data*2}</p>`})
["<p>8</p>", "<p>10</p>", "<p>14</p>", "<p>6</p>", "<p>16</p>", "<p>18</p>", "<p>22</p>", "<p>42</p>", "<p>106</p>"]

> map is use to iterate over the Array
> it always return same length of output as input array
> it us use to applay logics(sum,mul,div) or return html, bind data 

var a = [4,5,17,3,8,9,11,21,15,10]
a.filter((data) =>  {return data>10})
[17, 11, 21, 15]

> filter is use to filter out the value
> it may or may not return same length of input array
> it only return those value for which condition/output is true

var a = [4,5,17,3,8,9,11,21,15,10]
a.map((data) =>  {return data>10})
(10) [false, false, true, false, false, false, true, true, true, false]

var a = [0,1,2,3,-1]
a.map((data) =>  {return data*2})
[0, 2, 4, 6]

a.filter((data) =>  {return data*2})
0 > false  0
2 > true   1
4 > true   2
6 > true   3
[1, 2, 3]