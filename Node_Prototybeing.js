function user() {
    this.playerName = "";
    this.playerHealthPoints = 100;
    this.addHealthPoints = function addHealthPoints(playerObj, points) {
       playerObj.playerHealthPoints += points;
       console.log(points+" Has been added to "+ playerObj.playerName);
       console.log(playerObj.playerName+" Points are "+playerObj.playerHealthPoints)
    }
}
var player1 = new user();
var player2 = new user();
player1.playerName = "Fouad";
player2.playerName = "Anoud";

player1.addHealthPoints(player2, 3);
console.log(player1.playerName+" Has Health points "+ player1.playerHealthPoints);

user.prototype.reduceHealth = function (userObj, points) {
    userObj.playerHealthPoints -= points;
    console.log(userObj.playerName+" Health reduced by "+ points+ " now it is = "+ userObj.playerHealthPoints);
}

player2.reduceHealth(player1, 3);
console.log(player1.playerName+" Helth Points are "+ player1.playerHealthPoints)