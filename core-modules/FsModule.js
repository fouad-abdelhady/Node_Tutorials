let fs = require("fs");
fs.writeFileSync("myFile.json", { Name:"Fouad", SName:"Abdelhady"});
console.log(fs.readFileSync("./myFile.json").toString());