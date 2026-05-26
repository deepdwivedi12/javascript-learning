let a = Number(prompt("Enter first number : "))
let b = Number(prompt("Enter second number : "))
let c = Number(prompt("Enter third number : "))

if(a > b && a > c){
    console.log("Greatest number is : " + a)
}
else if(b > a && b > c){
    console.log("Greatest number is : " + b)
}
else{
    console.log("Greatest number is : " + c)
}