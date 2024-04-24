var car = {
    name : 'boleno',
    model : 'hatch back',
    manufacturer : 'maruti',
    price : '10lakh'
}


// write a programme to print model and manufacturer name of the given car

console.log(`model name is ${car.model},and car manufacturer is ${car.manufacturer}`);



// write a programme to add varient key to the car object with value has 'manual'

car["varient"]=['manual']
console.log(car);

// write a programme to a new value 'automatic' to the key varient

car.varient.push('automatic')
console.log(car);

// write a programme to add a new key as 'color' with value as red, blue and white.
