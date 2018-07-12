
function dwarfRollCall(dwarves){
   var string = "";
  for(var i = 0; i < dwarves.length; i++){
  string +=(`${ i+1}. ` + dwarves[i] + " " );
}//Used empty var string, test runs dwarves by name. `$ identifier to push var i + 1 to result dwarves to be listed numerically.
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
 //used empty var to push summonCaptainPlanet function through, to .toUpperCase each "element" and add "!".
 //used forEach method to execute the summonCaptainPlane property.
 

function longPlaneteerCalls(words = ["wind","fire"]){
for(var i = 0; i < words.length; i++){
if(words[i].length > 4) {
return true;
 }
 else{
return false; } } }
//var i = 0 < words.length; i++ to start calling each word to see if any are greater than 4, if so, return function is set to true else it is false. 


var snacks = ["cheddar", "pizza", "gouda", "cheezits", "camembert"];
function findTheCheese (snacks){
  var cheese = ["cheddar", "gouda", "camembert", "swiss"];
  for(var i=0; i < snacks.length; i++){
    for(var c = 0; c < cheese.length; c++){
      if(cheese[c]=== snacks[i]){
        return cheese[c];
      } 
    }
    
    }return "no cheese!"; }
   
   
    function wordsWithB(words){
    var bWords = [];
    for(var i = 0; i < words.length; i++){
      if (words[i].startsWith('b')){
        bWords.push(words[i]);
      }
      else return "No b words!"
      
      //if word starts with B then push word into bWords Array
    }
    
    
    return bWords;
    }
     //functions findTheCheese calls the strings and runs through them to see which are cheese. used var i for var snacks to find the cheese and var c to var snacks to find the cheese(cheese.length etc.) if cheese is found return function set to cheese and return function set to "no cheese!" if no cheese found.
