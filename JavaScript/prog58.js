fruits = ['apple','pinapple','mango','orange','kiwi']

// find mango from the given array
mango=fruits.find(f=>f=='mango')
console.log(mango);


// is mango present in the array
b=fruits.includes('mango')
console.log(b?'yes':'no');


// find the index of mango
i=fruits.indexOf('mango')
console.log(i);


