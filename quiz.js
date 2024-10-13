function checkAnswer(){
    const correctAnswer = "4";
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if(userAnswer === correctAnswer){
        document.getElementById('feedback').textContent= 'Correct! Well done.';
    }else{
        document.getElementById('feedback').textContent='incorrect. Try again!';
    }
    
}

var submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);