async function sleep(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// let a=await sleep()
// letb=await sleep()

async function main(params) {
//    let a=await sleep()
//    console.log(a);
//     let b=await sleep()
//     console.log(b);
}
// let [a,b] =[1,5,7]
// console.log(a,b);
// let[x,y,...rest]=[1,5,7,8,9,10]
// let.log(x,y,rest)

let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj;
console.log(a,b)
let arr=[1,4,6]
console.log(arr[0]+arr[1]+arr[2])
