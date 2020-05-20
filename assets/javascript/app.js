// GLOBAL VARIABLES

var questions = [
  {
    question: "Which of these is not one of Jimi's bands?",
    answers: [
      'Jimmy James and the Blue Flames',
      'The Velvatones',
      'Band of Gypsys',
      'The Jimi Hendrix Experiment',
    ],
    correctAnswer: 'The Jimi Hendrix Experiment',
    image: '',
  },
  {
    question: "For who's band did Jimi play rhythm guitar?",
    answers: [
      'Little Richard',
      'Eric Clapton',
      'Stevie Wonder',
      'Muddy Waters',
    ],
    correctAnswer: 'Little Richard',
    image: '',
  },
  {
    question: "In what year did Jimi's solo career start?",
    answers: ['1964', '1965', '1966', '1967'],
    correctAnswer: '1966',
    image: '',
  },
  {
    question: 'At what concert did Jimi infamously burn his guitar?',
    answers: [
      'Filmore East',
      'Monterey Pop Festival',
      'Woodstock',
      'Isle of Wight Festival',
    ],
    correctAnswer: 'Monterey Pop Festival',
    image: '',
  },
  {
    question: "What was Jimi's full name when he was born?",
    answers: [
      'James Marshall Hendrix',
      'Jimmy Marvin Hendrix',
      'Johnny Allen Hendrix',
      'James Allen Hendrix',
    ],
    correctAnswer: 'Johnny Allen Hendrix',
    image: '',
  },
  {
    question: 'How many studio albums did Jimi release',
    answers: ['3', '2', '4', '7'],
    correctAnswer: '3',
    image: '',
  },
  {
    question: "Who was the drummer for Jimi's band, The Band of Gypsys",
    answers: ['Mitch Mitchell', 'Noel Redding', 'Billy Cox', 'Buddy Miles'],
    correctAnswer: 'Buddy Miles',
  },
  {
    question: 'Before music, which branch of the military was Jimi in?',
    answers: ['Navy', 'Marines', 'Army', 'Airforce'],
    correctAnswer: 'Army',
    image: '',
  },
  {
    question: 'What was the model year of the Fender Jimi played at Woodstock?',
    answers: ['1967', '1968', '1969', '1970'],
    correctAnswer: '1968',
    image: '',
  },
  {
    question: 'In what city did Jimi pass away?',
    answers: ['Paris', 'Seattle', 'New York', 'London'],
    correctAnswer: 'London',
    image: '',
  },
];
$(document).ready(function () {
  $('#purpleHaze').get(0).play();
});

$('#start-game').on('click', function () {
  $('#start-game').remove();
  $('#gameDescript').remove();
  $('#gameScreen').addClass('questions');
  $('#timer').html(game.time);
  game.renderQuestion();
});
$(document).on('click', '#reset', function () {
  location.reload(true);
});
$(document).on('click', '.trivia-button', function (event) {
  clearInterval(timer);
  game.selectedAnswer(event);
  for (var i = 0; i < questions[game.loadedQuestion].answers.length; i++) {
    $('.trivia-button').attr('disabled', 'true');
  }
  // if (game.loadedQuestion !== questions.length - 1) {
  //     game.selectedAnswer(event);
  // }
  // else { game.results() }
});
$(document).on('click', '#nextQuest', function () {
  clearTimeout(timeoutNext);
  game.nextQuestion();
});
$(document).on('click', '#result', function () {
  clearTimeout();
  game.results();
});
var game = {
  questions: questions,
  time: 10,
  loadedQuestion: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  timeCount: function () {
    game.time--;
    $('#timer').html(game.time);
    if (game.time <= 0) {
      console.log('Your Time is Up');
      game.timesUp();
    }
  },
  renderQuestion: function () {
    timer = setInterval(game.timeCount, 1000);
    $('#gameScreen').html(
      `<h3 class="trivQuest">${questions[game.loadedQuestion].question}</h3>`
    );
    for (var i = 0; i < questions[game.loadedQuestion].answers.length; i++) {
      trivBtn = $('<button>');
      trivBtn.addClass('trivia-button');
      trivBtn.attr('id', `button-${i}`);
      trivBtn.attr('data-name', questions[game.loadedQuestion].answers[i]);
      trivBtn.text(questions[game.loadedQuestion].answers[i]);
      $('#gameScreen').append(trivBtn);
    }
  },
  selectedAnswer: function (event) {
    clearInterval(timer);
    console.log(event.target);
    if (
      $(event.target).data('name').toString() ===
      questions[game.loadedQuestion].correctAnswer.toString()
    ) {
      $(event.target).addClass('correct');
      game.rightAnswer();
    } else {
      $(event.target).addClass('wrong');
      game.wrongAnswer();
    }
  },
  nextQuestion: function () {
    clearInterval(timer);
    game.time = 10;
    $('#timer').html(game.time);
    game.loadedQuestion++;
    game.renderQuestion();
  },
  timesUp: function () {
    clearInterval(timer);
    game.wrongAnswers++;
    $('#gameScreen').html(
      `<h2 id="time-up-comment">THE CORRECT ANSWER WAS: ${questions[
        game.loadedQuestion
      ].correctAnswer.toString()}`
    );
    if (game.loadedQuestion === questions.length - 1) {
      timeoutResults = setTimeout(game.results, 5 * 1000);
      $('#gameScreen').append('<button id="result">See Results</button>');
    } else {
      timeoutNext = setTimeout(game.nextQuestion, 5 * 1000);
      $('#gameScreen').append('<button id="nextQuest">Next Question</button>');
    }
  },
  rightAnswer: function () {
    console.log('correct');
    clearInterval(timer);
    game.correctAnswers++;
    if (game.loadedQuestion === questions.length - 1) {
      // $('#gameScreen').append(`<img class="answer-image" src="${questions[game.loadedQuestion].image}">`);
      timeoutResults = setTimeout(game.results, 5 * 1000);
      $('#gameScreen').append('<button id="result">See Results</button>');
    } else {
      timeoutNext = setTimeout(game.nextQuestion, 5 * 1000);
      // $('#gameScreen').append(`<img class="answer-image" src="${questions[game.loadedQuestion].image}">`);
      $('#gameScreen').append('<button id="nextQuest">Next Question</button>');
    }
  },
  wrongAnswer: function () {
    console.log('wrong');
    clearInterval(timer);
    game.wrongAnswers++;
    if (game.loadedQuestion === questions.length - 1) {
      timeoutResults = setTimeout(game.results, 5 * 1000);
      $('#gameScreen').html(
        `<h2 id="time-up-comment">CORRECT ANSWER WAS: ${questions[
          game.loadedQuestion
        ].correctAnswer.toString()}`
      );
      // $('#gameScreen').append(`<img class="answer-image" src="${questions[game.loadedQuestion].image}">`);
      $('#gameScreen').append('<button id="result">See Results</button>');
    } else {
      timeoutNext = setTimeout(game.nextQuestion, 5 * 1000);
      $('#gameScreen').append(
        `<h2 id="time-up-comment">CORRECT ANSWER WAS: ${questions[
          game.loadedQuestion
        ].correctAnswer.toString()}`
      );
      $('#gameScreen').append('<button id="nextQuest">Next Question</button>');
    }
  },
  results: function () {
    clearInterval(timer);
    $('#timer').empty();
    $('#gameScreen')
      .html(`<h1 id="winCount">Correct Answers: ${game.correctAnswers}</h1>`)
      .append(`<h1 id="winCount">Wrong Answers: ${game.wrongAnswers}</h1>`)
      .append('<button id="reset">Restart</button>');
  },
};
