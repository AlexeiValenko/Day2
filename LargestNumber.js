/**
 * Created by py on 1/16/17.
 */

var prompt = require("prompt");

prompt.start();

console.log("Enter two numbers");

var firstNum = prompt.get(["n1", "n2"] ,function(err,result){

    if(err || !result || !result.n1 || !result.n2) {
        console.log(" Bad input");
        return;
    }

    if(isNaN(result.n1) || isNaN(result.n2) ) {
        console.log("Works with numbers only");
        return;
    }

    console.log("Largest number is " + ( result.n1 > result.n2 ? result.n1 : result.n2));
});
