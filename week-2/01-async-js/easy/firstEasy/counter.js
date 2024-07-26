

function counter(value){
    setInterval(()=>{
    console.log(value)
    value = value+1;
},1000)}

counter(0)