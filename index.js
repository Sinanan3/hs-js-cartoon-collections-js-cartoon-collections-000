function rollCall(dwarves){
   var array=["Doc", "Dopey", "Bashful", "Grumpy"];
  return array.join("Doc", "Dopey", "Bashful", "Grumpy");}
 
 
function summonCaptainPlanet(planeteerCalls)("earth!", "wind!", "heart!", "fire!"){
 return planeteerCalls.toUpperCase()+"!";
 }
 
function longPlaneteerCalls(words)("wind","fire") {
for(var i =0; i < words.length; i++){
if(words[i].length > 4) {
return true;
 }
 else
return false;  } 
}

 function findTheCheese (foods)("crackers","almonds", "cheddar", "gouda") {
for(var i =0; i < foods.length; i++) {
if(foods[i] === 'cheddar') {
 return foods[i]==="cheese";
} 
}
if(foods !== 'crackers') {
return 'no cheese!';
}
}