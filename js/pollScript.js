let polls = [ 
    
    poll1 = [
        question = "Quelle équipe va gagner ce soir ?", 
        answers = [ 
            {choice : 'Paris Eternal', isRight : true},
            {choice : 'Houston Outlaws', isRight : false},
        ],
    ],

    poll2 = [
        question = 'Quelle équipe deviendra championne ?', 
        answers = [ 
            {choice : 'blblblblbl', isRight : true},
            {choice : 'tktktkttktk', isRight : false},
            {choice : 'Florida Mayhem', isRight : false},
            {choice : 'London Spitfire', isRight : false},
        ],
    ],

    poll3 = [
        question = 'Sample text', 
        answers = [ 
            {choice : 'Sample text', isRight : true},
            {choice : 'Sample text', isRight : false},
            {choice : 'Sample text', isRight : false},
            {choice : 'Sample text', isRight : false},
        ],
    ],
    
];


let pollSelec = 0;

function displayPoll(polls, selecP) {


    console.log(selecP);
    debugger;

    // if( typeof selecP == 'undefined' ) {
    //     selecP = 0;
    // }

    let section = document.createElement('section');

    section.className = "pollVote";

    let titleDiv = document.createElement('div');

    titleDiv.className = "pollTitle";
    titleDiv.innerHTML = "<h1>" + polls[selecP][0] + "</h1>";

    let space = document.createElement('div');

    space.className = "pollChoices";

    

    document.querySelector("main").appendChild(section);
    document.querySelector(".pollVote").appendChild(titleDiv);
    document.querySelector(".pollVote").appendChild(space);


    debugger;

    for (let i = 0; i < polls[selecP][1].length; i++) {

        let newDiv = document.createElement('div');
        newDiv.innerHTML = "<h2>" + polls[selecP][1][i]['choice'] + "</h2>";
        newDiv.className = "option";
        newDiv.setAttribute('data-valid', polls[selecP][1][i]['isRight']);
        document.querySelector(".pollChoices").appendChild(newDiv);

        document.getElementsByClassName("option")[i].addEventListener('click', function() {

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




    





