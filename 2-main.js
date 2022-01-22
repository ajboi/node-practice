const M = require('./2-module1')

const N = require('./2-module2')

//This will invoke the line 8 function call.
const O = require('./2-module3')
// Inference: Whenever you export a module, node wraps the code
// over a layer of abstraction, and hence the function calls under
// that module are automatically invoked.
// Inference 2: It doesn't matter if you assign it to a variable or not.


