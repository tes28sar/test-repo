
function changeImage(){
    document.getElementById("gimg").src="empty.jpg";
} 
function backToNormal(){
    document.getElementById("gimg").src="full.jpg";
} 

function changeColor(){
    document.getElementById("h").style.color = "blue";
} 

function backAgain(){
    document.getElementById("h").style.color = "palevioletred";
} 
let  myFood = document.querySelector("#food");

function differentPic(){
    document.getElementById("food").style.backgroundImage = "url('fast.jpg')";
} 

function sameColor(){
    document.getElementById("food").style.background = "burlywood";
} 

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click" , () => {
    document.getElementById("text").style.visibility = "visible";
}) 

function disappear(){
    document.getElementById("text").style.visibility = "hidden";
} 

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click" , () => {
    document.getElementById("text1").style.visibility = "visible";
}) 

function goAway(){
    document.getElementById("text1").style.visibility = "hidden";
}







