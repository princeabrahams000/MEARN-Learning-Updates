// nested Funciton

const global = 'global'

const parent = ()=>{
    let parentVariable = 'PARENT'
    console.log(`parent variable is ${parentVariable}`);
     /* cann't be accessed inside child */
    /*  console.log(`child variable is ${childVariable}`);    */ 
    console.log(`global property is ${global}`);
    

    const child = ()=>{
        let childVariable = 'CHILD'
        /* can be accessed inside child */
        console.log(`parent variable is ${parentVariable}`);
        console.log(`child variable is ${childVariable}`);
        console.log(`global property is ${global}`);
    }
    child()    
    
}

parent()