let off = document.getElementById("btnOff")
let on = document.getElementById("btnOn")
let bulbOff = document.getElementsByTagName("img")
let bulbOn = document.getElementsByTagName("img")

on.addEventListener("click" , function(){
    bulbOff[0].src = "./Images/bulbOn.jpeg"    
})

off.addEventListener("click" , function(){
    bulbOn[0].src = "./Images/offBulb.jpeg"
})