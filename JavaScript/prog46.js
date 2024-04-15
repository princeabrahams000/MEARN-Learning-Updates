// write a programme to print pairs whose sum is 6

b=[2,3,5,4] //2,4
sum=6
noPair=false

for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]+b[j]==sum){
            noPair=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}
!noPair && console.log('no such pair');