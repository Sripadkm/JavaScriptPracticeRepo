
// simple function
function printMessage(){
    console.log("Hello");
}
printMessage();

// single parameterised function
function singleParameter(name){
    console.log(name);
}
singleParameter("Shree");

// Multiple Parameter function
function multipleParam(a,b){
    let c=a+b;
    console.log("The Sum of " +a+ " and " +b+ " is "+c);
}
multipleParam(2,5);


// simple function with return type 
function returnType(){
    return "Printing message from function with return type";
}
console.log(returnType());

{
function returnType1(){
    let a=10, b=20;
    return c=a+b;
}
console.log(returnType1());
}

// param function with return type
function paramFunctionWithReturn(a,b){
    return c=a+b;
}
console.log(paramFunctionWithReturn("Shree" , " Ram"));


