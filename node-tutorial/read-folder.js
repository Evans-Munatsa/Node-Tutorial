var fs = require('fs');

//Synchronous function
var findlines = function(folderName) {
  var files = fs.readdirSync('./files/week1');
  console.log(files);
  var linesInFiles = [];

files.forEach(function(file){
  var content = fs.readFileSync('./files/week1/' + file,  'utf-8');
  var lines = content.split('\n');
    lines.forEach(function(line) {
      linesInFiles.push(line);
    });
  });

  console.log(linesInFiles);
  return linesInFiles;
}

exports.linesInFiles = function(folderName) {
  var linesInFiles = findlines(folderName);
  return linesInFiles;
};

//Asynchronous function
exports.linesInFilesAsync = function(folderName, callback) {
  var linesInFiles = findlines(folderName);
  callback(null, linesInFiles);
    if (null) {
      return console.log(null);
    };
  console.log(linesInFiles);
}