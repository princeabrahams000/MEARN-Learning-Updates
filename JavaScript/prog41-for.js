// Different ways to access array items

fruits = ['apple','mango', 'straberry','kiwi','pinapple']

console.log(fruits);


// 1. for

for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
}


console.log('-----------------------------');


// 2. in

for(let i in fruits){
    console.log(fruits[i]);  /* in use chiyyumbo index la items na access chiyyan pattum */
}


console.log('-----------------------------');

// 3.  of

for(let i of fruits){
    console.log(i);     /* of use chiyyumbol directley array la items na access chiyyan pattum */
}

