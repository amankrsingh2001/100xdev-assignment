const fs = require('fs')
 fs.readFile('a.txt','Utf-8',(err,data)=>{
if(err){
    console.log(err)
}else console.log(data)
})



