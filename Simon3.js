var arr=[];
var arr2=[];
var i=1;
var j=1;
$(document).keyup(function (event){
  console.log("key pressed  :"+event.key);
  start2();
    $(this).unbind(event);
});
$("td").click(function(){
  var val;
  if($(this).hasClass("green")){
    val="green";
  }
  else if($(this).hasClass("red")){
    val="red";
  }
  else if($(this).hasClass("yellow")){
    val="yellow";
  }
  else if($(this).hasClass("blue")){
    val="blue";
  }
  switch(val)
  {
    case "green":arr2.push("green");
           break;
    case "red":arr2.push("red");
           break;
    case "yellow":arr2.push("yellow");
           break;
    case "blue":arr2.push("blue");
           break;
  }
  animation2(val);
  check(arr2.length-1);
});
if(j===0){
  $("td").unbind("click");
}
function start2(){
  arr2=[];
  var d= generate();
  var newarray=[];
  switch(d){
    case 1:arr.push("green");
           break;
    case 2:arr.push("red");
           break;
    case 3:arr.push("yellow");
           break;
    case 4:arr.push("blue");
           break;
  }
  console.log(arr);
  animation(d);
  levels(i);
  i++;
}
function animation(d){
  switch(d){
    case 1:$(".green").addClass("border-selec");
           var aud=new Audio("sounds/green.mp3");
           aud.play();
               $(".green").fadeOut("200").fadeIn("200");
           break;
    case 2:$(".red").addClass("border-selec");
           var aud=new Audio("sounds/red.mp3");
           aud.play();
               $(".red").fadeOut("200").fadeIn("200");
               break;
    case 3:$(".yellow").addClass("border-selec");
           var aud=new Audio("sounds/yellow.mp3");
           aud.play();
             $(".yellow").fadeOut("200").fadeIn("200");
             break;
    case 4:$(".blue").addClass("border-selec");
           var aud=new Audio("sounds/blue.mp3");
           aud.play();
               $(".blue").fadeOut("200").fadeIn("200");
             break;
  }
}
function animation2(val){
  switch(val){
    case "green":$(".green").addClass("border-selec");
           var aud=new Audio("sounds/green.mp3");
           aud.play();
               $(".green").fadeOut("200").fadeIn("200");
           break;
    case "red":$(".red").addClass("border-selec");
           var aud=new Audio("sounds/red.mp3");
           aud.play();
               $(".red").fadeOut("200").fadeIn("200");
               break;
    case "yellow":$(".yellow").addClass("border-selec");
           var aud=new Audio("sounds/yellow.mp3");
           aud.play();
             $(".yellow").fadeOut("200").fadeIn("200");
             break;
    case "blue":$(".blue").addClass("border-selec");
           var aud=new Audio("sounds/blue.mp3");
           aud.play();
               $(".blue").fadeOut("200").fadeIn("200");
             break;
  }
}
function generate(){
var x = Math.floor(Math.random()*4);
x++;
return x;
}
function levels(j){
  $("h1").text("Level "+j);
}
function check(length){
if(arr[length]===arr2[length]){
  console.log("Success");
  if(arr.length===arr2.length){
    setTimeout(function(){
      start2();
    },1000);
  }
}
else{
  j=0;
  $("h1").text("Game Over Lol");
  $("h3").text("Refresh to play again").css("color","white");
  $("h3").css("font-family","Sans-serif");
}
}
