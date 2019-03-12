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




//--------------------------------------------------------------------------------------------------------------
//CRATING DMG FUNCTION

function dmg (r1, r2) {
    if (r1.style.left < (r2.style.left + r2.style.width) ||
        (r1.style.left + r1.style.width) > r2.style.left ||
        r1.style.top < (r2.style.top + r2.style.height) ||
        (r1.style.top + r1.style.height) > r2.style.height) {
            
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
    gameWindow.appendChild(laser);
    laserArray.push(laser);
    
},1000)

setInterval(() => {
    //let lasers = document.getElementsByClassName("laser");
    for(i = 0; i < laserArray.length; i++){
        laserArray[i].style.left = parseInt(laserArray[i].style.left, 10) + 3 +"px";
        if (laserArray[i].style.left === "790px") {
            gameWindow.removeChild(laserArray[i]);
        }
        for(j = 0; j < meteorArray.length; j++){
            dmg(laserArray[i], meteorArray[j])
        }
    }    
}, 10);




setInterval(()=> {
    const meteor = document.createElement("div");
    meteor.className = "meteor";
    meteor.style.top = Math.floor(Math.random() * 380) + "px";
    meteor.style.left = "780px";
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
