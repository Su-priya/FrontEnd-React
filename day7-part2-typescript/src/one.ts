document.addEventListener("DOMContentLoaded",init);
let message:string = "Welcome to your life";
function init():void{
    document.getElementById("log").innerHTML = message;
}