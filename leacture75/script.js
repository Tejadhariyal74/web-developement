console.log("Harry is a hacker")
console.log("Rohan is a hecker")
setTimeout(() => {
    console.log("I am inside settimeout")
}, 2000);
console.log("THE END")
const loadscript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
sc.onload=callback("Harry");
document.head.append(sc)
}
loadscript("https://ednjs.cloedflare.com/ajax/libs/prism",callback)
const callback=(arg)=>{
    console.log(arg)
}