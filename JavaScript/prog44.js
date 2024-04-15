// input array = [4,5,6]
// output array= [11,10,9]


input = [4,5,6]

sum = 0
for(let i of input){
    sum=sum+i
}
// console.log(sum);

output = []
for(let num of input){
    output.push(sum-num)
}
console.log(output);