// Require all modules ending in ".spec" from the
// current directory and all subdirectories
var testContext = require.context('./src', true, /\.spec\.ts/);
// For each module, call the context function
// that will require the file and load it up here.
testContext.keys().forEach(testContext);