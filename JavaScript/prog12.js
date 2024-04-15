/* write a programme to find the second largest among three numbers and arrange them in decending order? */

n1 = 500
n2 = 200
n3 = 300

if(n1>n2){
    if(n2>n3){
        console.log(`the second largest number is ${n2}`);
        console.log(`desending order : ${n1}, ${n2}, ${n3}`);
    }
    else{
        console.log(`the second largest number is ${n3}`);
        console.log(`desending order : ${n1}, ${n3}, ${n2}`);
    }
}
else if(n2>n1){
    if(n1>n3){
        console.log(`the second largest number is ${n1}`);
        console.log(`descending order : ${n2}, ${n1}, ${n3}`);
    }
    else{
        console.log(`the second largest number is ${n3}`);
        console.log(`descending order : ${n2}, ${n3}, ${n1}`);
    }
}
else if(n3>n1){
    if(n1>n2){
        console.log(`the second largest number is ${n1}`);
        console.log(`descending order : ${n3}, ${n1}, ${n2}`);
    }
    else{
        console.log(`the second largest number is ${n2}`);
        console.log(`descending order : ${n3}, ${n2}, ${n1}`);
    }
}
else{
    console.log(`all are equal`);
}