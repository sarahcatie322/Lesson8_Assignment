/* Program Name: Recipe Display Application EC
 * Author: Sarah Tripp
 * Date: 11/11/2015
 * Filename: script.js
 */
function display(event){
  $(event.currentTarget).next().fadeIn("slow");
}//end of display()

//$("h3").click(display);

function display2(event){
  $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
}

$("h3").click(display2);

//append the word "fudgy" before "brownies"
$("header").siblings().children().first().prepend("Fudgy ");

//change the header background color
$("h1").css("background-color", "purple");

//change text color to grey when clicked
$("#greydiv1").click(display3);
$("#greydiv2").click(display3);

function display3(event){
  $(event.currentTarget).css("color", "grey");
}
