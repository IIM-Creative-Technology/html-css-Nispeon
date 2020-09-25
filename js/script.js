


    let icones = document.getElementsByClassName(".openNav");


    // for (let i = 0 ; i < icones.length; i++) {
    //     icones.addEventListener("click", showNav());
    // }

    document.querySelector("i").addEventListener("click", showNav);

    function showNav() {

        document.querySelector(".burger").id = "shown";
        console.log("cc");

        
    }

    window.addEventListener('click', function(e){
        if (!document.querySelector('header').contains(e.target)){
            document.querySelector(".burger").id = "hidden";
        }
    });
