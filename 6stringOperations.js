var city = "LonDOn"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city[0]
"L"
city[1]
"o"
city.length
6

var name = "   Nikita   "

var name = "   Nikita   "
undefined
name.length
12
name.trim()
"Nikita"
name.trim().length
6
var name = "  Bhumika  .  "
undefined
name.trim()
"Bhumika  ."

//case sensitive
var a = "john"
var b = "John"

var a = "john"
var b = "John"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true

var city = "amsTeRDam"    (Amsterdam)
undefined
city.charAt(0)
"a"
city.charAt(4)
"e"
city.charAt(11)
""

var city = "amsTeRDam" 
undefined
city.slice(1)
"msTeRDam"
city.slice(2)
"sTeRDam"

var city = "amsTeRDam" 
city.charAt(0).toUpperCase()
"A"

var city = "amsTeRDam" 
city.slice(1).toLowerCase()
"msterdam"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

var city = "amsTeRDam" 
city.slice(1)
"msTeRDam"
city.slice(2,5)
"sTe"
city.slice(2,6)
"sTeR"
city.slice(1,4)
"msT"

var city = "amsTeRDam" 
undefined
city.slice(-1) 
"m"
city.slice(-2)
"am"
city.slice(3,-3)
"TeR"
city.slice(1,-3)
"msTeR"
city.slice(-3,1)
""

city.slice(-4,-1)
"RDa"

city.slice(-1,-4)
""

>> first +ve , second -ve (remove from both side)

var a = "i am learning javascript"
undefined
a.replace('javascript','js')
"i am learning js"
var a = "javascript i am learning javascript"
undefined
a.replace('javascript','js')
"js i am learning javascript"
a.replace(/javascript/g,'js')
"js i am learning js"


var name = "  Bhumika  .  "
name.replace(/ /g,'')
"Bhumika."

var name = "  Bhumika  .  "
name.replace(/ /g,'-')
"--Bhumika--.--"


var url = "https://github.com/Aakashdeveloper/may_react_mrng_21";
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "may_react_mrng_21"]

var out = url.split('/')
out[0]
"https:"

out[out.length-1]
"may_react_mrng_21"

var a = "javascript i am learning javascript"
undefined
a.split(' ')
(5) ["javascript", "i", "am", "learning", "javascript"]

var a = "javascript"
a.split('')
(10) ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

var out = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
out.toString()
"j,a,v,a,s,c,r,i,p,t"
out.toString().replace(/,/g,'')
"javascript"
