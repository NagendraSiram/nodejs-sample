var fs = require('fs');

//__filename returns the full path of current file

fs.readFile(__filename, 'UTF-8', function(err, fileContent) {
    if(err) {
        console.log(err);
    } else {
        console.log('File content:', fileContent);
    }
});