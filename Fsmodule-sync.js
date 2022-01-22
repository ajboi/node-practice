// There are two flavours of Fs - async (non-blocking) and sync (blocking).

const {readFileSync, writeFileSync} = require('fs')

// Open and Read a file.
const first = readFileSync('C:\\Users\\ajai\\Documents\\GitHub\\node-practice\\test-pathModule\\first.txt','utf8')
const second = readFileSync('C:\\Users\\ajai\\Documents\\GitHub\\node-practice\\test-pathModule\\second.txt','utf8')

console.log(first, second)

// Write on a file.
// New file will be created if it doesn't exist. If the file already exists, it will be overwritten by Node.
writeFileSync(
    './test-pathModule/result.txt', 
    `Here is the result: ${first}, ${second}`
)

// Append on a file.
writeFileSync(
    './test-pathModule/result.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // says to append.
)
