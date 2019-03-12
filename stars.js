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