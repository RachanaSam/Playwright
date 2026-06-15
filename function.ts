import { error } from "node:console"

function message():void{
    console.log("hello world")
}
message()

function add(a:number, b:number):void{
console.log(a+b)
}
add(5,6)

function sub(c:number, d:number): number{
    return c-d
}
console.log(sub(9,5))

function throwerror(message:string): never{
    throw new Error(message)

    }
        throwerror("this is an error")