let a=4, b=5;    // global variables

function samplOne()
{
    let a=3;     //local variable 
    console.log(a);
}
samplOne();

if (a<b){
    let b=8;     // local variable
    console.log(b);
}

console.log(a);
console.log(b);
