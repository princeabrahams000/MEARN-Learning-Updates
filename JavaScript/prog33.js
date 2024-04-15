
//      *
//    *    *
//  *        *
// * * * * * * *

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=7;col++){
        if(col+row==5||col-row==3||row==4){
            str=str+'*'
        }
        else{
            str=str+" "
        }
    }
    console.log(str);
}



// ------------------------------------
console.log('-----------------------');

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(col==5|| col==1|| row==1|| row==5){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }
    console.log(str);
}



// ------------------------------------
console.log('-----------------------');

// 1
// 0 1
// 1 0 1
// 0 1 0 1


for(row=1;row<=4; row++){
    str=''
    for(col=1;col<=row; col++){
        if((row+col)%2==0){
            str=str+"1 "
        }
        else{
            str=str+"0 "
        }
    }
    console.log(str);
}



// ------------------------------------
console.log('-----------------------');


// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

for(row=1;row<=5;row++){
    str=""
    for(col=1; col<=5; col++){
        if(row==1||row==5||col+row==6||col==row){
            str=str+'*'
        }
        else{
            str=str+' '
        }
    }
    console.log(str)
}

// ------------------------------------
console.log('-----------------------');

//            11
//         12 13 14
//      15 16 17 18 19 
//   20 21 22 23 24 25 26 
//27 28 29 30 31 32 33 34 35