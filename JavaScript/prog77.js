accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('//1. total number of accounts');

console.log(`Total number of accounts is ${accounts.length}`);
console.log('--------------------------');

//2. print account number whose ac_type is savings
console.log('//2. print account number whose ac_type is savings');

accounts.filter(item => item.ac_type == 'savings').forEach(element => {console.log(element.acno)});
console.log('--------------------------');

//3.print the balance of accnount number 1000
console.log('//3.print the balance of accnount number 1000');

console.log(accounts.find(data => data.acno == 1000).balance)
console.log('--------------------------');


//4. print all gpay transactions
console.log('//4. print all gpay transactions');



console.log('--------------------------');

//5. print all transaction whose amount > 5000

//6. print credit transaction of account 1002

//7. print debit transaction of account 1002

//8. print transaction history of 1002


//9. print highest balance account details