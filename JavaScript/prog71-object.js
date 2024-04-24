//array

//[id, name, designation, location, salary, experience]
arr = [1000,'Neel','developer','kochi',25000,3]
   

// object

employee = {
    id:1000,
    name:'Neel',
    designation: 'developer',
    location: 'kochi',
    salary: '25000',
    age: 35
    
}

console.log(arr);
console.log(employee);


console.log(typeof(arr));
console.log(typeof(employee));

//
console.log(arr[2]);//array
//different method to access values stored in a key
console.log(employee['designation']);//object
console.log(employee.name);


//how to access a from a object
//------------------------------

//in method is used to follow the keys in the object.
console.log('-----------------------------');

for(let key in employee){
    console.log(key);
}


console.log('---------------------------------');
//write a prorgamme to check whether 'employee' key is present in the given object

if('emplocation' in employee){
    console.log('present');
}
else{
    console.log('not present');
}

//or
console.log('-----------or-----------------');
console.log(`emplocation key is ${'emplocation' in employee?'present':'not present'}`);


// how to add a key: value pair into an object
// objectname ["key"]=value

//add experiance to the given object employee

    employee["experience"]=3
    console.log(employee);

    console.log('----------------------------');
// check 'gender' key in the given employee. if presenent print 'yes' else add gender key to the given object with value has male.

if('gender' in employee){
    console.log('Yes');
}
else{
    employee["gender"]='male'
    console.log(employee);
}

console.log('-----------or-----------------');

'gender' in employee?console.log('yes'):(employee["gender"]='male', console.log(employee))


// update a value in an object
// ---------------------------

employee.age+=5
console.log(employee);

// how to delete a key from an object
// ----------------------------------

// delete method - returns boolean value

delete employee.age
console.log(employee);


// hw - student object - get, add, update , delete