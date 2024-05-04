//write methods for solving the given questions

class Bank{
    //property
    accountDetails = {
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }
    //validate a given account number
    validation(acno){
        return acno in this.accountDetails?true:false
    }

    //authenticate the account
    authentice(acno,pswd){
         if(this.validation(acno)){
            if(this.accountDetails[acno].password == pswd){
                console.log('authentication successful');
            }
         }
         else{
            console.log('invalid password');
         }
    }


    //check the balance
    balance(acno,pswd){
        if(this.validation(acno)){
            if(this.accountDetails[acno].password == pswd){
                console.log(`current balance of ${acno} is ${this.accountDetails[acno].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account number');
        }
    }



    //fund transfer
    fundTransfer(fromAcno, ToAcno, fpswd, amount){
        if(this.validation(fromAcno) && this.validation(ToAcno)){
            if(this.accountDetails[fromAcno].password == fpswd){
                if(this.accountDetails[fromAcno].balance >= amount){
                    console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${ToAcno} is ${this.accountDetails[ToAcno].balance} before fund transfer`);
                    this.accountDetails[fromAcno].balance -= amount
                    this.accountDetails[ToAcno].balance += amount
                    console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${ToAcno} is ${this.accountDetails[ToAcno].balance} after fund transfer`);
                    
                }
                else{
                    console.log('insufficient balance');
                }
            }else
            console.log('invalid password');
        }
        else{
            console.log('invalid account number');
        }
    }





}

console.log('-----//validate a given account number--------');

const user1 = new Bank()
console.log(user1.validation(1001)?'valid':'invalid');

console.log('----//authenticate the account-------');

user1.authentice(1000,'userone')

console.log('-----//check the balance-----');

user1.balance(1003,'userfour')

console.log('----//fund transfer---');

user1.fundTransfer(1000,1001,'userone',100)