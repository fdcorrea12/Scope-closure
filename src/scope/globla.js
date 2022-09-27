var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; //reasignacion
var a = 'aa' //redeclaracion


//global scope

var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; //global
    console.log(country);
}

countries()
console.log(country);