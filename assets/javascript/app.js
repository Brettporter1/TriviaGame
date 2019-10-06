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
        correctAnswer: 'Monterey Pop Festival'
    },
    {
        question: 'What was Jimi\'s full name when he was born?',
        answers: ['James Marshall Hendrix', 'Jimmy Marvin Hendrix', 'Johnny Allen Hendrix', 'James Allen Hendrix'],
        correctAnswer: 'Johnny Allen Hendrix'
    },
    {
        question: 'How many studio albums did Jimi release',
        answers: ['3','2', '4', '7'],
        correctAnswer: '3'
    },
    {
        question: 'Which of these is not one of Jimi\'s bands?',
        answers: ['Jimmy James and the Blue Flames', 'The Velvatones', 'Band of Gypsys', 'The Jimi Hendrix Experiment'],
        correctAnswer: 'The Jimi Hendrix Experiment'
    },
    {
        question: '',
        answers: [],
        correctAnswer: ''
    },
    {
        question: '',
        answers: [],
        correctAnswer:''
    },
    {
        question: '',
        answers: [],
        correctAnswer: ''
    }
];
var time = 10;
var loadedQuestion = '';
var selectedAnswer = '';
var correctAnswers = 0;
var wrongAnswers = 0;
var timeCount = function(){
    time--;
    $('#timer').html(time);
    if(time <= 0){
        clearInterval(timer);
        console.log('Your Time is Up');
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
    function gameOver(){
        for (var i = 0; i < questions.length; i++){
            $.each($(`input[name=question${i}]:checked`),function(){
                if($(this).val()=== questions[i].correctAnswer){
                    correctAnswers++;
                    console.log(`right:${correctAnswers}`);     
                }
                else{
                    wrongAnswers++;
                    console.log(`wrong:${wrongAnswers}`);
                }
                console.log(questions.length - (correctAnswers + wrongAnswers));
            })
            
        }
        // write the results back to the DOM
    }



// loop through questions and write to DOM

// push user input to topic array and display gifs
