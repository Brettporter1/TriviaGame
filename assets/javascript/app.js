// GLOBAL VARIABLES
var questions = [
    {
        question: 'Which Musician did Jimi not cover during his career?',
        answers: ['Elvis Presley', 'Bob Dylan', 'Chuck Berry', 'BB King'],
        correctAnswer: 'BB King'
    },
    {
        question: 'For who\'s band did Jimi play rhythm guitar?',
        answers: ['Little Richard', 'Eric Clapton', 'Stevie Wonder','Muddy Waters'],
        correctAnswer: 'Little Richard'
    },
    {
        question: 'In what year did Jimi\'s solo career start?',
        answers: ['1964', '1965','1966','1967'],
        correctAnswer: '1966'
    },
    {
        question: 'At what concert did Jimi infamously burn his guitar?',
        answers: ['Filmore East', 'Monterey Pop Festival', 'Woodstock', 'Isle of Wight Festival'],
        correctAnswer: ''
    },
    {
        question: '',
        answers: [],
        correctAnswer: ''
    },
    {
        question: '',
        answers: [],
        correctAnswer: ''
    },
    {
        question: '',
        answers: [],
        correctAnswer: ''
    }
];
var time = 30;
var loadedQuestion = '';
var selectedAnswer = '';
var correctAnswers = 0;
var wrongAnswers = 0;
var timeCount = function(){
    time--;
    $('#timer').html(time);
    if(time <= 0){
        alert('Your Time is Up');
        gameOver();
    }
}

    // onclick event for start game, hides start screen and renders timer
    $('#start-game').on('click', function () {
        $('#start-game').remove();
        timer = setInterval(timeCount,1000);
        $('#gameHeader').append("<h2 id='timeTitle'>Time Remaining</h2>").append(`<h1 id="timer">${time}</h1>`)
        for (var i = 0; i < questions.length;i++){
            $('#gameScreen').append(`<h2>${questions[i].question}</h2>`);
            for(var j = 0; j < questions[i].answers.length;j++){
                console.log(questions[i].answers[j]);
                $('#gameScreen').append(`<input type="radio" name="question${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}`);
            }
        }
    });




// loop through questions and write to DOM

// push user input to topic array and display gifs
