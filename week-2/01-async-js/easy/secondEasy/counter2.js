

function counter(value){
    setTimeout(()=>{
        console.log(value)
        value++;
        counter(value);
    },1000)
   
}

counter(1)