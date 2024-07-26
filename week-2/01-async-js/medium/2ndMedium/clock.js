const clock =() =>{
    const machineTime = new Date()
    const time24 = machineTime.toLocaleTimeString('en-Us',{
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    })

    const time12 = machineTime.toLocaleTimeString('en-US',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    })

    const clock24 = document.querySelector('.clock1')
    clock24.textContent = time24

    const clock12 = document.querySelector('.clock2')
    clock12.textContent = time12
    setTimeout(clock,1000)
}
clock()