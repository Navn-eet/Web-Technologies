//console.log("Hello world I am learning Javascript.");

/*let a=6;
console.log(typeof(a))
let b=7;
console.log(typeof(b))
let sum= (a+b);
console.log(sum);*/

/*var a=6;
var b=7;
var mul=(a*b);
console.log(mul); */

/*let a;
a=6;
var b;
b=7;
const PI=3.14;
console.log(PI); */

/* const PI=3.14;
let radius = window.prompt("Enter Radius:")
console.log(radius)
let circumference= 2 * PI * radius;
console.log("The circumfrence is",circumference) */

/*const PI=3.14;
let radius=window.prompt("Please Enter The Radius:")
console.log(radius)
let area= PI * radius *radius;
console.log("The area is",area);
alert(area); */

/*function sleep(){
    let name="anish";
    console.log("His name is",name)
    let breed="human I guess.";
    console.log("His breed is",breed)
    let age=window.prompt("Please enter his age:")
    console.log("His asge is",age);
    if (age>=10){
        console.log("The dog is too old.")
    }else{
        console.log("This dog is not so old.")
    } 
}

sleep(); */

document.getElementById("myBtn").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI=3.14;
    let circumference= 2 * PI * radius;
    console.log("The circumference is",circumference);
   // document.getElementById("myLabel").innerHTML = circumference;
    document.getElementById("circumference").innerHTML = "The circumference of the given radius is"+circumference;
}
