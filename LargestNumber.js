/**
 * Created by py on 1/16/17.
 */

var prompt = require("prompt");

prompt.start();

console.log("Enter two numbers")
var firstNum = prompt.get(["n1", "n2"] ,function(err,result){
    console.log("Largest is " + ( result.n1 > result.n2 ? result.n1 : result.n2));
});
