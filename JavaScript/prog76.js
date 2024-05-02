products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log('//1. print product name only');

for(data of products){
    console.log(data.pName);
}

console.log('---------or using Array method-----------');

products.forEach(pro => {console.log(pro.pName)});


//2. print all mobile details whose display is lcd
console.log('//2. print all mobile details whose display is lcd');

for(data of products){
    if(data.display == 'lcd'){
        console.log(data);
    }
}

console.log('---------or using Array method-----------');

products.filter(pro => pro.display == 'lcd').forEach(item => console.log(item));



//3. print 5g mobile phone name
console.log('//3. print 5g mobile phone name');

for(data of products){
    if(data.band == '5g'){
        console.log(data.pName);
    }
}

console.log('---------or using Array method-----------');

products.filter(pro => pro.band == '5g').forEach(item => console.log(item.pName))


//4. sort mobile based on price
console.log('//4. sort mobile based on price');

products.sort((pro1,pro2) => pro1.price - pro2.price).forEach(item => console.log(item.pName))

//5. print costly mobile
console.log('//5. print costly mobile');

cpro = products.reduce((pro1,pro2) => pro1.price>pro2.price?pro1:pro2)
console.log(cpro.pName);

//6. print low cost mobile
console.log('//6. print low cost mobile');

lpro = products.reduce((pro1,pro2) => pro1.price<pro2.price?pro1:pro2)
console.log(lpro.pName);
