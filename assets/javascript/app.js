var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');


//timer 
var number =  90;
var intervalId;





function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;


  $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if(number === 0) {

        //  ...run the stop function.
        stop();

    }


    //  The stop function
    function stop() {
        clearInterval(intervalId);
    }
}

    //  Execute the run function.
    run();




    function loadQuestion (questionIndex) {
        var q = questions[questionIndex]; 
        questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;


    };

    function loadNextQuestion () {
        var selectedOption = document.querySelector('input[type=radio]:checked');
        if(!selectedOption){
            alert('Please select your answer!');
            return;
        }
        var answer = selectedOption.value;
        if(questions[currentQuestion].answer == answer) {
            score ++;
        }

        selectedOption.checked = false; 
        currentQuestion++;
        if(currentQuestion == totQuestions- 1) {
            nextButton.textContent = "Finish";
        }

        if(currentQuestion == totQuestions) {
            container.style.display = 'none';
            result.style.display = '';
            resultCont.textContent = 'Your Score: ' + score + ' Out of 10';
            return;
        }
        loadQuestion(currentQuestion);
    }
    loadQuestion(currentQuestion);