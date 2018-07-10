function rollCall(dwarves){
   var array=["Doc", "Dopey", "Bashful", "Grumpy"];
  return array.join("Doc", "Dopey", "Bashful", "Grumpy");}
 
 
function summonCaptainPlanet(planeteerCalls)("earth!", "wind!", "heart!", "fire!"){
 return planeteerCalls.toUpperCase()+"!";
 }
 
function longPlaneteerCalls(words) {
for(var i =0; i < words.length; i++){
if(words[i].length > 4) {
return true;
 }
 else
return false;  } 
}

 function findTheCheese (foods) {
for(var i =0; i < foods.length; i++) {
if(foods[i] === 'cheddar') {
 return foods[i];
} 
}
if(foods !== 'cheddar') {
return 'no cheese!';
}
}