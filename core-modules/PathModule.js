let path = require("path");

let fileLocation1 = "C:/Users/Fouad/Downloads//New folder/New folder";
console.log(fileLocation1);
console.log(path.normalize(fileLocation1));
console.log(path.dirname(fileLocation1));
console.log(path.basename(fileLocation1));
console.log(path.extname(fileLocation1));


