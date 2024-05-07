class A {
    methoda(...arg){
        console.log(arg);
        //sum
        console.log(arg.reduce((n1,n2)=>n1+n2));
    }
  
}

//object

const obj = new A ()
obj.methoda(5,10,11)