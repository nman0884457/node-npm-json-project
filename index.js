var _ = require('lodash');
var readJson = require('read-json-file');
 
readJSON(pathToYourJson, function(error, data){
    if (error) {
        throw error;
    }
    console.log(data);
});