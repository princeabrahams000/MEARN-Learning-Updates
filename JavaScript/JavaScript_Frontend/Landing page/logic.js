class Landing{
    //property
    database = {
        Milan:{username:'Milan',password:'milan123'},
        Manu:{username:'Manu',password:'manu123'},
        Mini:{username:'Mini',password:'mini123'}
    }

    //to store data to local storage.
    saveData(){
        if(this.database){
            localStorage.setItem("database",JSON.stringify(this.database))
        }
    }
    
    //to get data from local storage
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))

        /* console.log(this.database); */
    }

    //method to register user

    register(){
        this.getData()
        let user = regUser.value
        let pswd = regpswd.value
       /*  console.log(user,pswd); */
       if(user == ""|| pswd == ""){
        alert('please fill the form completely')
       }
       else{
        if(user in this.database){
            alert('account already exist')
        }
        else{
            this.database[user]={username:user,password:pswd}
            alert('user added successfully')
            this.saveData()
            window.location= 'home.html'
        }
       }
    }
    
    //method to login user
    login(){
        let user1 = logUser.value
        let pswd1 = logpswd.value
        /* console.log(user1,pswd1); */

        this.getData()
        if(user1=="" || pswd1==""){
            alert('please fill the form completely')
        }
        else{
            if(user1 in this.database){
                if(this.database[user1].password==pswd1){
                    alert('login successfull')
                    localStorage.setItem("user",user1)
                    //navigate to home page
                    window.location = 'home.html'
                }else{
                    alert('invalid username or password')
                }
            }else{
                alert('Account does not exist')
            }
        }
    }
}


//create object
const obj = new Landing()
obj.saveData()
obj.getData()