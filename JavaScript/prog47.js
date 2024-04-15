// write a programme to print common numbers from a given array

p=[10,11,12,20,30]
q=[11,20,25,30,33]
// 11,20,30

isFound = false
for(let i of p){
    for(let j of q){
        if(i==j){
            isFound=true
            console.log(i);
        }
    }
}
!isFound && console.log('no common number');