// write a programe to check whether the given 3digit number is armstrong number or not?
// armstrong numbers are those numbers  that are equal to the sum of their own digits rise to power of numbers of digit
// 153 = 1**3 + 5**3 + 3**3 =153
// 1634 = 1**4 + 6**4 + 3**4 + 4**4



/* ----------------only 3digits number */
num=153
temp=num
remainder = 0
sum=0

while(num>0){
    remainder = num%10
    sum = sum + remainder**3
    num= Math.floor(num/10)
}
if(temp==sum){
    console.log(`Armstrong number`);
}
else{
    console.log(`Not armstrong number`);
}


/* ------------------in general terms--------------------------- */

num=163
power=(num+'').length
temp=num
remainder = 0
sum=0

while(num>0){
    remainder = num%10
    sum = sum + remainder**power
    num= Math.floor(num/10)
}

temp==sum?console.log(`Armstrong number`):console.log(`Not armstrong number`);




