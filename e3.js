function isValid(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
console.log(isValid('{"firstName":"Zeynab","lastName":"Mousavi"}'));    //True

console.log(isValid('{"firstName""Zeynab","lastName":"Mousavi"}'));    //False
