const fs = require('fs')

fs.readFile('a.txt','Utf-8',(err,data)=>{
       let value = data.replace(/\s+/g, ' ');
       fs.writeFile('a.txt',value,(err,data)=>{
        if(err){
            console.log(err,'Error')
        }else console.log('File written succesfully')
       });
})