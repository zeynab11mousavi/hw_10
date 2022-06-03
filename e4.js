// QUESTION:  - what is the Output of the code below and why ?



let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert);


/* ANSWER:
        The out put is "1" because the function takes the first resolve in the code
        and forgets about the other resolves */  