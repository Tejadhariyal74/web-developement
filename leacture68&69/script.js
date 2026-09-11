console.log("Harry")
let boxes=document.getElementsByClassName("box")
console.log("boxes")
boxes[2].Style.backgroungcolor="red"
document.getElementById("red").style.backgroundColor="red"
document.querySelector(".box").style.backgroundColor="green"
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box ").forEach(e=>{e.style.backgroundcolor="green";})
document.getElementsByTagName("div")
e=document.getElementsByTagName
e[4].matches("red")
e[3].closest(".container")
document.querySelector(".container").contains(e[2])
document.querySelector(".container").contains(document.querySelector("body"))
document.querySelector(".container").contains(document.querySelector(".body"))
document.querySelector(".body").contains(document.querySelector(".container"))