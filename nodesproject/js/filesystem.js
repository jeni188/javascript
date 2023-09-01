
// callback function to handle file system

const fs = require("fs");

// synchronous read

const data = fs.readFileSync("./node.txt","utf8");
console.log("sync File contents:",data);

fs.readFile("./node.txt","utf8",(err, data) =>{
    if(err){
        console.log("error reading file:" ,err);
        return;
    }
    console.log("File contents:",data);
});



