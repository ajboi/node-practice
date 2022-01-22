const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// info about uptime of system
const uptime = os.uptime()
console.log(uptime)

// Operating system properties
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)