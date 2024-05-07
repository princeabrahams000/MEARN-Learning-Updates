class A {
    methoda(){
        console.log('inside first method');
    }
    methoda(n){
        this.n1 = n
        console.log(`inside the methoda with argument ${this.n1}`);
    }
    methoda(n,m){
        console.log(`inside the methoda with arguments ${n} and ${m}`);
    }
}

//object

const obj = new A ()
obj.methoda(5)