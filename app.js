
const navLink = document.getElementsByClassName("nav-link");

for (let i=0; i<navLink.length;i++){
    
    navLink[i].addEventListener("click", function(){
        const current = document.querySelector(".current");
        const target = navLink[i].getAttribute("href");
        const targetLocation = document.querySelector(target);
        console.log(target,targetLocation);
        current.classList.toggle("current");
        targetLocation.classList.toggle("current");
               
    })
}

