// 2        3           4           5
// 24       369         4936        61725
// pattern - 12*2//  3*123//    4*1234//    5*12345


n=5
i=1
str=""
pro=0

while(i<=n){
str=str+i
i++
}
pro=n*str
console.log(pro);




// another pattern example - //2+2  //3+33+333  //4+44+444+4444 


n=2
i=1
str=""
sum=0

while(i<=n){
str=str+n
/* console.log(str); */
sum=sum+Number(str)
i++
}
console.log(sum);