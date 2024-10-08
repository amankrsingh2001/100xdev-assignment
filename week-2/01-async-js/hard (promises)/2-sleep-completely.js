/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
   const p = new Promise(function(resolve){
            const start = Date.now()
            let now = start;
            while(now-start<milliseconds){
                now = Date.now();
            }
            resolve()
    })
    return p ;
}

module.exports = sleep;
