RegExp
regular expresion 
^$

var a = "Hi"
a.match("^([a-z])$")
null

var a = "hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
["h", "h", index: 0, input: "h", groups: undefined]

var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

var a = "hii"
a.match("^([a-z]{2})$")
null

var a = "Hi"
a.match("^([a-z]{2})$")
null

// exact 2 word
var a = "Hi"
a.match("^([A-Za-z]{2})$")
null

//range
var a = "iHii"
a.match("^([A-Za-z]{2,5})$")

// any range
var a = "iHii"
a.match("^([A-Za-z]+)$")
(2) ["iHii", "iHii", index: 0, input: "iHii", groups: undefined]

var a = "iHii0"
a.match("^([A-Za-z]+)$")
null

var a = "iHJii90"
a.match("^([D-Ja-z0-9]+)$")


var a = "iHJii90$"
a.match("^([D-Ja-z0-9$#@]+)$")

//range
var a = "86868755"
a.match("^([0-9]{10})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "aa.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@a"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@aa"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@aaa"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@aaa."
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "a@aaa.uu"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@aaa.uu", "a", "aaa", "uu", index: 0, input: "a@aaa.uu", groups: undefined]
