const os = require('os');
const uptime = os.uptime();
const user = os.userInfo();
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: (os.totalmem()/1e+6)/1024,
    freeMem: (os.freemem()/1e+6)/1024,
}
console.log(currentOS);