// nested Array


a = [[2,10],[50,25],[2,100],[7,16],[33,9]]

// write a programme to find the numbers less than or equal to 10

for(let num of a){
    for(let n of num){
        if(n<=10){
            console.log(n);
        }
    }
}

