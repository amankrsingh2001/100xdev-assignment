const fs = require('fs')

fs.writeFile('writeFile.txt','Mohit is working and slaman is sleeping',function(err,data){
    if(err){
        console.log('Error aa gya')
    }else console.log('File has been written successfully')
})