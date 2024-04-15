// reduce () method
// ----------------

a = [10,11,2,7,3,6,1]

// write a programme to find the highest of the given array
highest = a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);


// write a programme the lowest of the given array
lowest = a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);



// write to find the sum of the given array
sum = a.reduce((n1,n2)=>n1+n2)
console.log(sum);