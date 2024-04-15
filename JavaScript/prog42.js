expense = [12000,24000,34000,10000,54000,40000]

// find the lowest expense

lowest = expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}

console.log(lowest);



console.log('---------------------------');

// find the highest expense

highest = expense[0]
for(let num of expense){
    if(num>=highest){
        highest=num
    }
}

console.log(highest);


console.log('---------------------------');



// find the total expense

sum = 0

for(num of expense){
    sum = sum+num
}

console.log(sum);


console.log('---------------------------');








