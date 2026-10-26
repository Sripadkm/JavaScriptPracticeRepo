
// toUpperCase and toLowerCase
{
let a="sRIpAD kUlKArNI";
let b=a.toLowerCase();
console.log(b);
}
{
let a="Sripad Kulkarni";
let b=a.toUpperCase();
console.log(b);
}

// trim()
let aName = "              Sripad Kulkarni        ";
console.log(aName);
console.log(aName.trim());

// includes()  --> true or false
let message="Welcome to JavaScript";
console.log(message.includes("Java"));

// split()
let textone="Sripad,Kulkarni,Started,JavaScript";
console.log(textone.split(","));
ar = textone.split(",");
console.log(ar[0]);
console.log(ar[1]);
console.log(ar[2]);
console.log(ar[3]);

// replace()
let text="Hello Java";
console.log(text.replace("Java","JavaScript"));


// substring()/slice() 

let textname="Sripad Kulkarni"
console.log(textname.substring(0,8));   
// 0th char is 's' and 8th char is 'u' so substring will includes from 0th to '7' char
console.log(textname.slice(0,8));

// startsWith()   --> true or false
let messageone="JavaScript Made Easy";
console.log(messageone.startsWith("J" || "Java"));

// endsWith() --> true or false
let messagetwo="JavaScript Made Easy";
console.log(messagetwo.endsWith("y" || "Easy"));


// match() --> is used to find the patterns inside a string and access the matched value 

let matchName="your otp is 12345";
console.log(matchName.match(/\d+/));
console.log(matchName.match(/\d+/)[0]);

{
// \d --> Matches a single number 
// \d+ --> Matches one or more numbers 
// [a-z] --> Matches the lower case letters 
// [A-Z] --> Matches the upper case letters 
// \s --> matches space
// text --> matches text
// . --> it can be any(symbol/digit) single letter
// .. or .{2} --> it can print any two letters
// ... or .{3} --> it will print .
// .+ --> one or many OR all the chars from the that single char from the beginning 
// .* --> zero or more chars/letters


let a="hello 54321";
console.log(a.match(/\d/));
console.log(a.match(/\d+/)[0]);        // unsafe version (/\d+/)[0]
console.log(a.match(/\d+/)?.[0]);     // safe version  (/\d+/)?.[0]
console.log(a.match(/[a-z]/)?.[0]);
console.log(a.match(/[a-z]+/)?.[0]);
let b="HELLO 123"
console.log(b.match(/[A-Z]/)?.[0]);
console.log(b.match(/[A-Z]+/)?.[0]);
console.log(b.match(/\s/));

let text="test@gmail.com";
console.log(text.match(/gmail/)?.[0]);

let message="$1234a";
console.log(message.match(/./)?.[0]);
console.log(message.match(/../)?.[0]);
console.log(message.match(/.../)?.[0]);
console.log(message.match(/..../)?.[0]);
console.log(message.match(/.{5}/)?.[0]);
console.log(message.match(/............/));   
// null --> because dots are more that the letters present in the string 
console.log(message.match(/.+/)?.[0]);

let str="";
console.log(str.match(/.+/));  // null
console.log(str.match(/.*/));  // ''

let nameA="Name: Shree Kulkarni";
console.log(nameA.match(/Name: .*/)?.[0]);

let colname="color";
console.log(colname.match(/colou?r/)?.[0]);

let dotstr="Price: 499.99";
console.log(dotstr.match(/\./)?.[0]);
console.log(dotstr.match(/\d+\.\d+/)?.[0]);  
// \d+ is no of digits has . and has again no of digits 

let phone="9876543210";
console.log(phone.match(/^\d{10}$/)?.[0]);
// ^ starts with and $ is ends with, also /d{10} 10 digits

let email="shree@gmail.com";
console.log(email.match(/^[a-z]+/)?.[0]); 
// prints only shree - because only a-z @ is special letter not small letter
console.log(email.match(/^[a-z].+/)?.[0]);
// prints full email [a-z]. here . is includes any letter special or digit or capital
}
