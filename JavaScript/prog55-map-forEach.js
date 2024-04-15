a = [10,11,12,13,14,15]
// write a programme to find square of each element in the given array?

sq = a.map(num=>num**2)
console.log(sq);



console.log('-------------using of method----------');

for(let num of a){
    console.log(num**2);
}


console.log('---------using forEach method----------');

a.forEach(num => {
    console.log(num**2);
});



console.log('--------prog to find cube using map----------');

// write a programme to find cube of a given number using map

cube = a.map(num=>num**3)
console.log(cube);




console.log('------------------');
// write a programme to create a new array with number <=13 increment by 1 and number > 13 decrement by 1
// op = [11,12,13,14,13,14]

b = a.map(num=> num<=13?num+1:num-1)
console.log(b);