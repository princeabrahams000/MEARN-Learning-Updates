// write a programme to display numbers whose exponantial is in the range of 8 to 36. where user can input power value.
// power=2, // 1, 4, 9, 16,25, 36, 49.... =print - 3,4,5
// power=3, // 1, 8, 27, 64, 125, 216.... =print - 2,3



console.log('Output of Predefined range programme'); 
//-----------------------------------------
power = 2
num = 1

while(num<=36){
    if(8<=num**power && num**power<=36){
        console.log(num);
    }
    num++
}

console.log('Output of User defined range programme'); 
//----------------------------------------
power=2
low = 8
up = 36
num =1

while(num<=36){
    if(low<=num**power && num**power<=up){
        console.log(num);
    }
    num++
}

