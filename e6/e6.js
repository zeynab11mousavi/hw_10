// What do you think? Will the .catch trigger? Explain your answer.
new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000)
});


// MY ANSWER:
/* No it was not triggered because the program will read the error line after 
   the running process is started and the promise can not handle it  */   
                          
                          