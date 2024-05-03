//[id, name, designation, location, salary, experience]

//[1000,'Neel','developer','kochi',25000,3]

//oops

class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary

    //constructor
    constructor(ename,eDesg,empLo,empsal){
        this.empName = ename
        this.empDesig = eDesg
        this.empLocation = empLo
        this.empSalary = empsal
    }

    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
    }
}

//objects

const obj = new Employee('neel','developer','kochi','25000')
obj.display()

const obj1 = new Employee ('max','hr', 'tvm', '30000')
obj1.display()