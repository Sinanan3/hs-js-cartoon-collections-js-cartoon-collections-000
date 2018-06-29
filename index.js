  function rollCall(dwarves){
   var array=["Doc", "Dopey", "Bashful", "Grumpy"];
  dwarves.forEach((dwarves,i)=>array.push(`${i+1}. ${dwarves[i]} `));
  return array.join("Doc", "Dopey", "Bashful", "Grumpy");}
 
 
function summonCaptainPlanet(planeteerCalls)("earth", "wind", "heart", "fire"){
 return planeteerCalls.map(a=>a.toUpperCase()+"!");
 }
 
 function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true;
    }
  }
  return false;
}
 
var shortWords = ["wind", "fire"];
longPlaneteerCalls(words);

function findTheCheese (foods) {
  for(var i=0;i<foods.length;i++){
  if (foods[i]=="cheddar"
  ||foods[i]=="gouda"
  ||foods[i]=="camembert"
  ){
    return foods[i];
  }
}
return "no cheese!";
}