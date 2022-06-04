/*QUESTION 
     Are these code fragments equal? In other words, do they behave the same way in
    any circumstances, for any handler functions?
    promise.then(f1).catch(f2); 
    Versus:
    promise.then(f1, f2);*/



/*  MY ANSWER:
        No, actually they are different because if an error happens in the "f1" in the
        first statement (promise.then(f1).catch(f2)), the ".catch" that is right after 
        it will handle it, but in the second statement there is no ".catch" to handle the 
        error so the error will not be handled and because of the ".then" it will be 
        passed just like that    */ 