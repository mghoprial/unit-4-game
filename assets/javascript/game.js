//**speudo code************speudo code**********speudo code*********speudo code**********************
// create 4 crystals with 1-12 points per individual crystal. Crystal points randomize every time.
//create a "goal points" that randomize every round.  Goal points must = 19-120
//create a "current score" counter
// if current score= goal points that is a win.  If current score> goal points, that is a loss
//create a win/ loss counter
//***************************************************************************************************

var goalPoints = 0 ;
var currentScore = 0 ;
var wins = 0 ;
var losses= 0; 
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0; 
function hiddenCrystalScore() {
crystal1 = Math.floor(Math.random() * 12)+1;
console.log("crystal 1 score:" + crystal1);
crystal2 = Math.floor(Math.random() * 12)+1;
console.log("crystal 2 score:" + crystal2);
crystal3 = Math.floor(Math.random() * 12)+1;
console.log("crystal 3 score:" + crystal3);
crystal4 = Math.floor(Math.random() * 12)+1;
console.log("crystal 4 score:" + crystal4);
goalPoints = Math.floor(Math.random() * 101)+19;
$("#goalPoints").text(goalPoints);
console.log("goal points" + goalPoints);
};
hiddenCrystalScore();

