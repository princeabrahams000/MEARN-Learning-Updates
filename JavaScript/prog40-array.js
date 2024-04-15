// array
weekdays = ['mon','tue','wed','thur']

// to dispay an array
console.log(weekdays);

// total number of items in an array
console.log(weekdays.length);

// print wed from the given array
console.log(weekdays[2]);
console.log(weekdays[3]);

// add friday to a given array
// push

weekdays.push('fri')
console.log(weekdays);

// add 3 to the given array
weekdays.push(3)
console.log(weekdays);

// remove 3 from the given array
weekdays.pop()
console.log(weekdays);

// add sun to the given array - first item aayittu
weekdays.unshift('sun')
console.log(weekdays);


weekdays.unshift('sat')
console.log(weekdays);

//  shift – to remove an items from start of an array.
weekdays.shift()
console.log(weekdays);