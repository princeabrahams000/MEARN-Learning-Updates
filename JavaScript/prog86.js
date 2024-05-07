class A {
    methoda(){
        console.log('inside the first method');
    }
}

class B {
    methoda(){
        console.log('inside the second method');
    }

    methoda(){
        console.log('inside the third method');
    }
}

const obj = new B()

obj.methoda()