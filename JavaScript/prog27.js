// write a programme where loop can iterate up to 10 but print till 5.

for(i=1; i<=10; i++){
    console.log(i);
    if(i>=5){
        break
    }
}


// write a programme to check given number is prime number or not?
// prime number - have two factors - 1 and the number itself.

num=2
isPrime=true
if(num>1){
    for(i=2; i<num; i++){
        if(num%i==0){
            isPrime=false
            break
        }
    }
}
else{
    isPrime=false
}

isPrime?console.log('PRIME'):console.log('NOT PRIME');