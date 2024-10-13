function checkAnswer(){
    const correctAnswer = "4";
    var getSelectedValue = document.querySelector('input[name="quiz"]:checked');
    if(getSelectedValue !=null){
        userAnswer = getSelectedValue.value;
    }
    if(userAnswer === correctAnswer){
        document.getElementById('feedback').textContent= 'Correct! Well done.';
    }else{
        document.getElementById('feedback').textContent='incorrect. Try again!';
    }
    
}

var submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);