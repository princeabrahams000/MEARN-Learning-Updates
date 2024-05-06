baleno = {
    model : 'hatch black',
    manufacturer : 'maruti',
    varient : ['automatic','manual']
}

glanza = {
    manufacturer : 'Toyota'
}

glanza.__proto__ = baleno

console.log(glanza.model);
console.log(glanza.varient);
console.log(glanza.manufacturer);