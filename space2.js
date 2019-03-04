const gameWindow = document.createElement("div");
const gameWindowObj = {
    width: "800px",
    height:"400px",
    position : "relative",
    background: "black",
    left : "0px",
    top : "0px",
}
for (let attr in gameWindowObj) {
    gameWindow.style[attr] = gameWindowObj[attr];
}
document.body.appendChild(gameWindow);

//CREATING STARS SPAWN AND MOVEMENT

for (i = 0; i <= 350; i++) {
    const instantStar = document.createElement("div");
    instantStar.className = "star";
    instantStar.style.left = Math.floor(Math.random() * 798) +"px";
    instantStar.style.top = Math.floor(Math.random() * 398) +"px";
    
    gameWindow.appendChild(instantStar);
}

setInterval (function () {    
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.floor(Math.random() * 398) + "px";
    star.style.left = "798px";
    gameWindow.appendChild(star);       
}, 1500);

setInterval(() => {
    let stars = document.getElementsByClassName("star");
    for(i = 0; i < stars.length; i++){
        stars[i].style.left = parseInt(stars[i].style.left, 10) - 1 +"px";
        if (stars[i].style.left === "0px") {
            gameWindow.removeChild(stars[i]);
        }
    }    
}, 500);

//SHIP

const ship = document.createElement("div"); 

const shipObj = {
    width : "10px",
    height : "6px",
    background : "blue",
    position : "relative",
    top : "0px",
    left : "0px"
}
for (let attr in shipObj) {
    ship.style[attr] = shipObj[attr];
}

let shipTop = 0;

gameWindow.appendChild(ship);

document.addEventListener('keydown', movementD);
function movementD(e) {
   if(e.keyCode === 40) {
        shipTop += 5;
        ship.style.top = shipTop +'px';
        if(shipTop >= 395){
            shipTop -=5;
        }
   } 
}
document.addEventListener('keydown', movementUp);
function movementUp(e){
    if(e.keyCode === 38) {
        shipTop -= 5;
      ship.style.top = shipTop +'px';
       if(shipTop < 5){
            shipTop +=5;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------
//CRATING DMG FUNCTION

function dmg (r1, r2) {
    if (
        (r1.style.left < (r2.style.left + r2.style.width)) &&
        ((r1.style.left + r1.style.width) > r2.style.left)&&
        (r1.style.top < (r2.style.top + r2.style.height))&&
        ((r1.style.top + r1.style.height) > r2.style.height)
    ) {
            
            gameWindow.removeChild(r1);

            gemeWindow.removeChild(r2);
        }   
}
//CREATING GAME OBJECT ARRAYS AND SPAWN FUNCTION

const laserArray = [];
const meteorArray = [];


/*function divSpawn(arr, interval, style, topPosition, leftPosition) {
    setInterval (() => {
        const obj = document.createElement("div");
        obj.className = style;
        obj.style.top = topPosition;
        obj.style.left = leftPosition;
        gameWindow.appendChild(obj);
        arr.push(obj);
         
    }, interval)
}*/


setInterval(()=> {
    const laser = document.createElement("div");
    laser.className = "laser";
    laser.style.top = parseFloat(ship.style.top) + 3 + "px";
    laser.style.left = "10px";
    laser.style.width = "10px";
    laser.style.height ="2px";
    gameWindow.appendChild(laser);
    laserArray.push(laser);
    
},1000)

//this cycle checkes onle 3 anf 4 element of laserArray! needs to be reworked!
setInterval(() => {
    //let lasers = document.getElementsByClassName("laser");
    for(i = 0; i < laserArray.length; i++){
        laserArray[i].style.left = parseInt(laserArray[i].style.left, 10) + 10 +"px";
        if (laserArray[i].style.left === "790px") {
            gameWindow.removeChild(laserArray[i]);
            laserArray.splice(i, 1);        
        }        
        for(j = 0; j < meteorArray.length; j++){
            dmg(laserArray[i],meteorArray[j]);
        }
    }    
    console.log(laserArray.length);
    console.log(laserArray[i]);
}, 50);




setInterval(()=> {
    const meteor = document.createElement("div");
    meteor.className = "meteor";
    meteor.style.top = Math.floor(Math.random() * 380) + "px";
    meteor.style.left = "780px";
    meteor.style.width = "20px"; 
    meteor.style.height = "20px";
    gameWindow.appendChild(meteor);
    meteorArray.push(meteor);
    
},2000);

setInterval(() => {
    //let meteors = document.getElementsByClassName("meteor");
    for(i = 0; i < meteorArray.length; i++){
        meteorArray[i].style.left = parseInt(meteorArray[i].style.left, 10) - 1 +"px";
        if (meteorArray[i].style.left === "0px") {
            gameWindow.removeChild(meteorArray[i]);
            alert("GAME OVER");
        }
    }    
}, 100);
