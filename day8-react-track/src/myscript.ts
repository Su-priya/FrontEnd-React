let users:Array<string> = ['Batman','Superman','Aquaman','Cyborg','Flash','Wonder women'];
// union types
// let info:(number | string | boolean) = false;

// let product:any;

function adder(num1:number = 0,num2:number = 0):string{
    return num1+num2+" is the total";
};

//let adder = (num1:number = 0,num2:number = 0):string => num1+num2+"is the total;"

interface Iperson{
    city:string;
    power:number;
}
class Person implements Iperson{
    city:string = "default city";
    power:number = 5;
    constructor(ncity:string){
        this.city=ncity
    }
};

function init(){
    document.body.innerHTML+="<h1>"+adder(8,9)+"</h1>"
}
document.addEventListener("DOMContentLoaded",init);
