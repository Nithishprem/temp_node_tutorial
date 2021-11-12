const os = require('os');

// info about current user
// const user = os.userInfo();

// info about system uptime
// console.log(os.uptime());


const currentOS ={
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem()/1024/1024/1024,
    freemem: os.freemem()/1024/1024/1024
}

console.log(currentOS);