// let obj={
//     a:1, 
//     b:"Harry"
// }
// console.log(obj)

// let animal={
//     eat:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit._proto_=animal;
// Setrabbit,[[prototype]]=animal

class Animal{
    constructor(name){
this.name=name
console.log("object is created..")
    }
    eats(){
        console.log("kha rha hu")
    }
    jumps(){
        console.log("kood raha hu")
    }
}
let a=new Animal("bunny");
console.log(a)
class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("object is created and he is  lion...")
    }
}
let l=new Lion("shera")
console.log(l);