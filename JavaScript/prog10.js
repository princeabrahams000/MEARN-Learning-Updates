
/* write a program to find the largest among the two given numbers  */


num1 = 200
num2 = 300


if(num1>num2){
    console.log(`largest number is ${num1}`);
}
else if(num2>num1){
    console.log(`largest number is ${num2}`);
}
else{
    console.log(`both are equal`);
}



/* using Ternary operator */
num1>num2?console.log(`largest number is ${num1}`): console.log(`largest number is ${num2}`);

