// write a programme to check whether a given number is palindrom or not? eg:121

num=121
reverse=0
reminder=0
temp=num

while(num>0){
    reminder=num%10
    reverse=(reverse*10)+reminder
    num=Math.floor(num/10)
}


/* if(temp==reverse){
    console.log(`its a palindrome number`);
}
else{
    console.log(`its not a palindrome number`);
}
 */


/* using ternary */

temp==reverse?console.log(`palindrome`):console.log(`not a palinedrome number`);