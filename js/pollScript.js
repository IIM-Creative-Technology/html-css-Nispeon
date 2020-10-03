var polls = [ 
    
    poll1 = [
        questionTitle = 'Quelle équipe va gagner ce soir ?', 
        answers = [ 
            {choice : 'Paris Eternal', isRight : true},
            {choice : 'Houston Outlaws', isRight : false},
        ],
    ],

    poll2 = [
        questionTitle = 'Quelle équipe deviendra championne ?', 
        answers = [ 
            {choice : 'Paris Eternal', isRight : true},
            {choice : 'Houston Outlaws', isRight : false},
            {choice : 'Florida Mayhem', isRight : false},
            {choice : 'London Spitfire', isRight : false},
        ],
    ],
    
];


var pollSelec = 0;
var questSelec = 0;

function displayPoll(polls, selecP, selecQ) {


    var section = document.createElement('section');

    section.className = "pollVote";

    var titleDiv = document.createElement('div');

    titleDiv.className = "pollTitle";

    var title = document.createElement('h1');

    title.innerHTML = polls[selecP][0];

    

    document.querySelector("main").appendChild(section);
    document.querySelector(".pollVote").appendChild(titleDiv);
    document.querySelector(".pollTitle").appendChild(title);

    



    // console.log(polls[0][1].length);
    // for (let i = 0; i < polls.length; i++) {

    //     var section = document.createElement('section');

    //     section.className = "pollVote";

    //     document.querySelector("main").appendChild(section);

    // }
};

displayPoll(polls, pollSelec, questSelec);

function addEvent(elem, event, fn) {
    if (elem.addEventListener)
    {
        elem.addEventListener(event, fn, false);
    }
    else
    {
        elem.attachEvent("on" + event, function() {
            return(fn.call(elem, window.event));   
        });
    }
};

addEvent(window, 'click', function(e){
    var list = document.querySelector('.option');
    addEvent(list, 'click',  function(e){
         e = e || window.event;
         var el = e.target || e.srcElement;
         displayPoll(polls, selecP, selecQ);
    });
});




    





