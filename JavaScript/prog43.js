// write a programme to check whether 2 is present or not?
arr = [10,11,12,3,2,4]

searchItem = 2
isPresent = false
count = 0
for(num of arr){
    count++
    if(num==searchItem){
        isPresent = true
        break
    }

}
console.log(isPresent?'Present':'not present');
console.log(count);



