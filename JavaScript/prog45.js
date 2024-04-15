// write a programme to find the duplicate number from the given array = 10,20,30
a = [10,20,30,20,30,40,50,60,10,10]


isDuplication = false
for(i=0;i<=a.length;i++){        /* of use chithal eappalum starting nno array count chiyyunnollu so normal loop use chiyyanam */
    for(j=i+1;j<=a.length;j++){
        if(a[i]==a[j]){
            isDuplication = true
            console.log(a[i]);
        }
    }
}
!isDuplication && console.log('no duplication'); /* && truthy operator */


console.log('------------prog for getting output without repeating the same number--------------------------');




b=[]

for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            // variable initilization
            isDuplicate = false
            // checking whether the number is there in output array
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){  // if present number is not added
                    isDuplicate = true
                    break
                }
            }
            if(!isDuplicate){ //not present in output array the number is added to the output array
                b.push(a[i])

            }
        }
    }
}

isDuplicate?console.log(b):console.log('no duplication');



