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