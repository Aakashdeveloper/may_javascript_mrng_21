//es5
function language(name,country,city){
    this.name = name;
    this.country = country;
    this.city=city
    this.greet = function(){
        return `Say Hi to ${name}`
    }
}
var user = []
var Hindi = new language('Hindi','India')
undefined
Hindi
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to Hindi"

var English = new language()


var user = []
var Hindi = new language('Hindi','India')
undefined
user.push(Hindi)
1
user
[language]
user[0]
language {name: "Hindi", country: "India", greet: ƒ}
user[0].name
"Hindi"
var English = new language('English','UK')
undefined
user.push(English)
2
user
(2) [language, language]
user[1]
language {name: "English", country: "UK", greet: ƒ}


///////
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country
    }

    greet = () => {
        return `Say Hi to ${this.name}`
    }
}

var French = new language1('French','France')
French
language1 {name: "French", country: "France", greet: ƒ}

