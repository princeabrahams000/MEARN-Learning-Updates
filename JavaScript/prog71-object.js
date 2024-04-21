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
    experience:'3'
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

//add experiance 