let polls = [ 
    
    poll1 = [
        question = "Meilleures vacances ?", 
        answers = [ 
            {choice : 'Plage', isRight : true},
            {choice : 'Montagne', isRight : false},
        ],
    ],

    poll2 = [
        question = 'Meilleure couleur ?', 
        answers = [ 
            {choice : 'Bleu', isRight : false},
            {choice : 'Rouge', isRight : false},
            {choice : 'Vert', isRight : true},
            {choice : 'Jaune', isRight : false},
        ],
    ],

    poll3 = [
        question = 'Meilleur axe de l\'IIM ?', 
        answers = [ 
            {choice : 'DW', isRight : true},
            {choice : 'Créa', isRight : false},
            {choice : 'JV', isRight : false},
            {choice : '3D', isRight : false},
            {choice : 'CDEB', isRight : false},
        ],
    ],
    
];


let pollSelec = 0;

let score = 0;

function displayPoll(polls, selecP) {


    // console.log(selecP);

    // if( typeof selecP == 'undefined' ) {
    //     selecP = 0;
    // }

    let section = document.createElement('section');

    section.className = "pollVote";

    let titleDiv = document.createElement('div');

    titleDiv.className = "pollTitle";
    titleDiv.innerHTML = "<h1>" + polls[selecP][0] + "</h1>";

    let space = document.createElement('div');

    if(polls[selecP][1].length <= 4) {
        space.className = "pollChoices";
    } else {
        space.className = "pollChoices oneColumn";
    }

    

    document.querySelector("main").appendChild(section);
    document.querySelector(".pollVote").appendChild(titleDiv);
    document.querySelector(".pollVote").appendChild(space);



    for (let i = 0; i < polls[selecP][1].length; i++) {

        let newDiv = document.createElement('div');
        newDiv.innerHTML = "<h2>" + polls[selecP][1][i]['choice'] + "</h2>";
        newDiv.className = "option";
        newDiv.setAttribute('data-valid', polls[selecP][1][i]['isRight']);
        document.querySelector(".pollChoices").appendChild(newDiv);

        document.getElementsByClassName("option")[i].addEventListener('click', function() {

            let rep = this.getAttribute("data-valid");

            if(rep == "true") {

                score++;

            }

            console.log(score);

            document.querySelector(".pollVote").remove();
            
            displayPoll(polls, pollSelec);
            
        });
    }


    pollSelec++;


};

displayPoll(polls, pollSelec);

// function addEvent(elem, event, fn) {
//     if (elem.addEventListener)
//     {
//         elem.addEventListener(event, fn, false);
//     }
//     else
//     {
//         elem.attachEvent("on" + event, function() {
//             return(fn.call(elem, window.event));   
//         });
//     }
// };

// addEvent(document.querySelector('.option'), 'click', function(e){
//     let list = document.querySelector('.option')[1];
//     addEvent(list, 'click',  function(e){
//          e = e || window.event;
//          let el = e.target || e.srcElement;
//          document.querySelector("pollVote")[0].remove()
//          displayPoll(polls, selecP, selecQ);
//     });
// });




    





