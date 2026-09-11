let random= Math.random()
console.log(random);
let a= prompt("Enter first number");
let b= prompt("Enter operation");
let c= prompt("Enter second number ");
let obj=
{
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*",
}
if (random>0.1){
    // Perform correct calculation.
    alert("The result is $ {eval('${a} ${c} ${b}')}")
}
else{
    c=obj[c]
    // Perform Wrong calculation.
    alert("The result is $ {eval('${a} ${c} ${b}')}")
}