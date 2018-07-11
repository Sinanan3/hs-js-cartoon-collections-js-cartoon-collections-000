function dwarfRollCall(dwarves){
   var string = "";
  for(var i = 0; i < dwarves.length; i++){
  string +=(`${ i+1}. ` + dwarves[i] + " " );
}
return string;
  }
 
 
var planeteerCalls = ["earth!", "wind!", "heart!", "fire!"];
function summonCaptainPlanet(planeteerCalls){
  var empty = []
  planeteerCalls.forEach(function(element){
     empty.push(`${element.toUpperCase()}` + "!")
  });
  return empty;
 }
 
 
 

function longPlaneteerCalls(words = ["wind","fire"]){
for(var i = 0; i < words.length; i++){
if(words[i].length > 4) {
return true;
 }
 else{
return false; } } }
var snacks = ["cheddar", "pizza", "gouda", "cheezits", "camembert"];
function findTheCheese (snacks){
  var cheese = ["cheddar", "gouda", "camembert"];
  for(var i=0; i < snacks.length; i++){
    for(var c = 0; c < cheese.length; c++){
      if(cheese[c]=== snacks[i]){
        return cheese[c];
      } 
    }
    
     }return "no cheese!";
}