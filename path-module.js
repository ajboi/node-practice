const path = require('path')

// Separator property that returns a platform specific separator.
console.log(path.sep) // \ for windows.

// Create paths for files
const filePath = path.join('/a', '/b') // \test-pathModule\subfolder\test.txt
console.log(filePath)

// Get the basename
const base = path.basename(filePath)
console.log(base) // test.txt

// Get absolute path
// const absolute = path.resolve(__dirname, 'test-pathModule', 'content', 'subfolder', 'test.txt')
 // __dirname points to the current directory.
 // the first argument is treated as the root.
const absolute = path.resolve("/a", '/b') // outputs just C:\\b

console.log(absolute)