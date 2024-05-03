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
        return acno in this.accountDetails?'Account is valid':'invalid account'
    }

    //authenticate the account

    //check the balance

    //fund transfer
}

const user1 = new Bank()
console.log(user1.validation(1001));