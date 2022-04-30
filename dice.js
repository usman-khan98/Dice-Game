var d1 = Math.floor((Math.random()*6)+1);
var d2 = Math.floor((Math.random()*6)+1);

if(d1>d2){
  document.querySelector("h1").textContent = "🚩player 1 wins"
}
else if (d2>d1) {
  document.querySelector("h1").textContent = "player 2 wins🚩"
}
else{
  document.querySelector("h1").textContent = "Its A Draw!"
}
var randomImg1 = "dice" +d1+ ".png";
var randomSource1 = "images/"+ randomImg1;
var randomImg2 = "dice" +d2+ ".png";
var randomSource2 = "images/"+ randomImg2;
document.getElementsByClassName("img1")[0].setAttribute("src", randomSource1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomSource2);
