//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//1) print all employee name 

console.log('1. Employee Name:');

employee.forEach(emp=>{
    console.log(emp[1]);
})



console.log('-----------------------------------------------------------------------------------------------');


//2) print total numbers of employee

console.log(`Total number of employee is ${employee.length}`);


console.log('-----------------------------------------------------------------------------------------------');


//3) print developer employee details

console.log('3. Developer employee details:');

employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))


console.log('-----------------------------------------------------------------------------------------------');


//4) print details of employee Laisha

console.log('detail of employee Laisha:');

employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro))


console.log('-----------------------------------------------------------------------------------------------');

//5) print employee name whose salary > 30000?

console.log('5. Employee name whose salary>30000');
employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))

console.log('-----------------------------------------------------------------------------------------------');

//6) sort employee based on their salary in descending order

console.log('employee based on thieir salary in descending order:');
// sort((a,b)=>b-a)
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal);


console.log('-----------------------------------------------------------------------------------------------');

//7) sort employee based on their experience in ascending order

console.log('employee based on their experience in ascending order');
// sort((a,b)=>a-b)

exp = employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(exp);

console.log('-----------------------------------------------------------------------------------------------');

// print the employ name whose have the higest salary

console.log('the employ name whose have the higest salary');
empsal=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(empsal[1]);

console.log('-----------------------------------------------------------------------------------------------');


// print the employ name whose have the least salary

console.log('the employ name whose have the least salary');
empsal=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(empsal[1]);

console.log('-----------------------------------------------------------------------------------------------');


// total salary exp of the company

console.log('total salary exp of the company');
totalExp = employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalExp);