//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
    console.log('1. district having Highest +ve case');
    highestpc=covid_data.reduce((pc1,pc2)=>pc1[2]>pc2[2]?pc1:pc2)
    console.log(highestpc);
    console.log(highestpc[1]);

    console.log('--------------------------------');

//2. district having Highest 1st dose vaccine
    console.log('2. district having Highest 1st dose vaccine');
    highest1stdose=covid_data.reduce((c1,c2)=>c1[5]>c2[5]?c1:c2)
    console.log(highest1stdose);
    console.log(highest1stdose[1]);

    console.log('--------------------------------');

//3. district having lowest death rate
   console.log('3. district having lowest death rate');
    lowestDeathRate=covid_data.reduce((dr1,dr2)=>dr1[3]<dr2[3]?dr1:dr2)
    console.log(lowestDeathRate);
    console.log(lowestDeathRate[1]);

    console.log('--------------------------------');

//4. sort data with +ve case in descending order
    console.log('4. sort data with +ve case in descending order');
    positivecase=covid_data.sort((c1,c2)=>c2[2]-c1[2])
    console.log(positivecase);
   
    // array la oro items access chiyyan forEach use chithal mathi

    covid_data.sort((c1,c2)=>c2[2]-c1[2]).forEach(item=>{console.log(item[1])});


    console.log('--------------------------------');

//5. is district with +ve cases > 15000
    
    console.log('5. is district with +ve cases > 15000');
    positiveCase=covid_data.some(poscase=>poscase[2]>15000)
    console.log(positiveCase?'yes':'no');

    console.log('--------------------------------');

//6. sort data with 1st dose vaccine ascending order
    console.log('6. sort data with 1st dose vaccine ascending order');
    covid_data.sort((c1,c2)=>c1[5]-c2[5]).forEach((item)=>console.log(item[1]))

    console.log('--------------------------------');

//7. Print Thrissur details
    console.log('7. Print Thrissur details');
    Thrissur=covid_data.find(dis=>dis[1]=='Thrissur')
    console.log(Thrissur);


console.log('--------------------------------');

//8. Print total number of positive cases
console.log('8. Print total number of positive cases');
totalPositive=covid_data.map(pc=>pc[2]).reduce((pvc1,pvc2)=>pvc1+pvc2)
console.log(totalPositive);


console.log('--------------------------------');

//9. Print total number of curred cases
console.log('9. Print total number of curred cases');
totalCurred=covid_data.map(cas=>cas[4]).reduce((cure1,cure2)=>cure1+cure2)
console.log(totalCurred);


console.log('--------------------------------');

//10. Print curred cases in Idukki
console.log('//10. Print curred cases in Idukki');
idukki=covid_data.find(dis=>dis[1]=='Idukki')
console.log(idukki[4]);




