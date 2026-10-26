/*function sum(a,b){
    return a+b;
}
    console.log(sum(2,2))
*/
const sum = (a,b) => a+b;
console.log(sum(2,2));

//-----------------------------
// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

const sayHello = () => console.log("Hello")
sayHello();


//----------------------------------------------------
// function printParam(name){
//     console.log(name);
// }printParam("Single Param")

{
const printParam = name => console.log(name);
printParam("Single Param with arrow function/Lambda function");
}

//--------------------------------------------------------------
{
//     function doubleTheNum(a){
//     return a+a;
// }console.log(doubleTheNum(3));

const doubleTheNum = (a) => a+a;
console.log(doubleTheNum(3)); 

}

// --------------------------------------------------------------

{
// function twoParam(a,b){
//     let c=a+b;
//     return c;
// }console.log(twoParam(2,6));

//const twoParam = (a,b) => {let c=a+b; return c};
const twoParam = (a,b) =>  a+b;
console.log(twoParam(6,6));

}

