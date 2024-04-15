/* Write a programme to find the reverse of a given number using while loop. */

num=1234
reminder=0
reverse=0

console.log(`the given number is`, num);
while(num>0){
    reminder=num%10
    reverse=(reverse*10)+reminder
    num= Math.floor(num/10) /* math.floor - decimal ozivakkan */
}
console.log(`reverse of the given number is`, reverse);
