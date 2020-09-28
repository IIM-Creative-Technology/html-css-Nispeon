

document.querySelector("header").addEventListener("mouseenter", showNav);
document.querySelector("header").addEventListener("mouseleave", hideNav);

// Pour mobile
document.querySelector("header").addEventListener("click", showNav);

window.addEventListener('click', function(e){
    if (!document.querySelector('header').contains(e.target)){
        document.querySelector(".burger").id = "hidden";
    }
});

function showNav() {

    document.querySelector(".burger").id = "shown";
    console.log("cc");

    
}

function hideNav() {
    document.querySelector(".burger").id = "hidden";
}



