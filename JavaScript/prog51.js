// write a programme to print pairs whose sum is 6

b=[2,3,4,5]

psum = 7
low = 0
up = b.length-1
isPresent = false

while(low<up){
    csum=b[low]+b[up]

    if(csum==psum){
        isPresent=true
        console.log(`${b[low]}, ${b[up]}`);
        low++
    }
    else if(csum<psum){
        low++
    }
    else{
        up--
    }
}

!isPresent && console.log('no pair');

