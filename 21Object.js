var moviename = "Avengers"
var movierating = 4.5
var movielang = "English"

var moviename1 = "Jab we Met"
var movierating1 = 4.8
var movielang1 = "Hindi"

var movies = {
    name:'Avengers',
    rating:4.4,
    language:'English'
}
undefined
typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.4
movies.language
"English"

movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.4, language: "English", ind: "Hollywood"}

movies.rating=4.3
4.3
movies
{name: "Avengers", rating: 4.3, language: "English", ind: "Hollywood"}

delete movies.language
true
movies
{name: "Avengers", rating: 4.3, ind: "Hollywood"}

movies['name']
"Avengers"
movies['language']
"English"
movies['ind']="Hollywood"
"Hollywood"
delete movies['rating']
true

/////json
> javascript object notation
var movies  = [
    {
        name:'Avengers',
        rating:4.4,
        language:'English',
    },
    {
        name:'Jab We Met',
        rating:4.8,
        language:'Hindi'
    } 
]

movies[0].language
"English"
movies[1].name
"Jab We Met"

movies.map((data) => {return data.name})
["Avengers", "Jab We Met"]


for(i=0;i<movies.length;i++){
    console.log(movies[i].name)
}
"Avengers"
"Jab We Met"

var movies  = [
    {
        name:'Avengers',
        rating:4.4,
        language:'English',
        starcast:['Tony Stark','Abc'],
        timing:[
            {'delhi':2021},
            {'london':2020}
        ]
    },
    {
        name:'Jab We Met',
        rating:4.8,
        language:'Hindi',
        starcast:['Sahid', 'Karrena']
    } 
]

movies[0]
{name: "Avengers", rating: 4.4, language: "English", starcast: Array(2), timing: Array(2)}
movies[0].starcast[0]
"Tony Stark"
movies[0].timing[1]
{london: 2020}
movies[0].timing[1].london
2020