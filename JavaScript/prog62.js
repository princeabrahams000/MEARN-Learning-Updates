//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
    console.log('----------1. display all product name-----------');
    products.forEach(pro=>{console.log(pro[1]);})


//2. display product whose price < Rs.50

    console.log('---------2. display product whose price < Rs.50----------');
    prod=products.filter(pro=>pro[2]<50)
    console.log(prod);

    // ---oro item access chiyyan
    products.filter(pro=>pro[2]<50).forEach(item=>console.log(item))
    // item name mathram mathiyenkkil
    products.filter(pro=>pro[2]<50).forEach(item=>console.log(item[1]))



//3. print price of oreo
    console.log('-----------3. print price of oreo-----------');
    oreo = products.find(pro=>pro[1]=='oreo')
    console.log(oreo[2]);


//4. print costly product name
    console.log('-----------4. print costly product name----------');
    costlyProduct = products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
    console.log(costlyProduct[1]);

//5. display out of stock product
    console.log('-------5. display out of stock product---------');
    products.filter(pro=>pro[3]==0).forEach(item=>console.log(item[1]))




//6. sort products based on stock in decsending order
    console.log('------6. sort products based on stock in decsending order----------');
    products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(item[1]))


//7. print product having maximum available stock
    console.log('---------7. print product having maximum available stock---------');
    maxavilstock=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
    console.log(maxavilstock[1]);




//8. is there any product can be purchased by Rs. 10
    console.log('---------8. is there any product can be purchased by Rs. 10----------');
    price = products.some(pro=>pro[2]<10)
    console.log(price?'yes':'no');



//9. Is there any product price in the range of 10 to 30
    console.log('----------. Is there any product price in the range of 10 to 30-----------');
    range = products.some(pro=>pro[2]>10 && pro[2]<30)
    console.log(range?'yes':'no');


//10. print all products in the range of 10 to 30
    console.log('---------10. print all products in the range of 10 to 30--------');
    products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(item=>console.log(item[1]))