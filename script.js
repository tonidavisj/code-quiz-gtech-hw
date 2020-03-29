$(document).ready(function() {

    var currentQuestion = $('.quizQuestion');
    var quizOptionList = $('.quizOptions');
    var questionResults = $('.result');
    var qOn = 0;
    var currentScore = 0;

    var codeQuestions = [
        {
            question: "Which data type does not belong?",
            options: {
                a: "Symbol",
                b: "Number",
                c: "Boolean",
                d: "Text"
            },
            answerIs: "d"
        },
        {
            question: "What keyword is used to set a variable?",
            options: {
                a: "var",
                b: "let",
                c: "const",
                d: "All the above"
            },
            answerIs: "d"
        },
        {
            question: "What method is used to create a random number?",
            options: {
                a: "Math.RandomNum()",
                b: "Random.Math()",
                c: "Math.Random()",
                d: "Math.random()",
                e: "Random.math()"
            },
            answerIs: "c"
        },
        {
            question: "Use three equal signs (=) when you are comparing _____",
            options: {
                a: "Data Type",
                b: "Value",
                c: "Data Type and Value"
            },
            answerIs: "c"
        },
        {
            question: "Who is the best rapper?",
            options: {
                a: "Dylan",
                b: "Dylan",
                c: "Dylan",
                d: "Dylan",
                e: "All the above"
            },
            answerIs: "e"
        }
    ];

    loadQuestion(qOn);

    function loadQuestion(e){
        //debugger;
        currentQuestion.append(codeQuestions[e].question);
        console.log(currentQuestion);

        for(letter in codeQuestions[e].options){
            quizOptionList.append(`<a class="${letter} quizOption btn btn-primary">${letter} : ${codeQuestions[e].options[letter]} </a>`);
        }
        console.log(quizOptionList);
    }

    function loadQuizEnd(){
        //debugger;
        var submitInput = `<p>Your final score is: ${currentScore}<br/>Please submit your name below</p><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Your Full Name" aria-label="Your Full Name" aria-describedby="button-addon2"><div class="input-group-append"><a class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</a></div></div>`
        $('.card-text').append(submitInput);
    }

    // function submitHighScore(){
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("password", password);
    // }

    $("body").delegate('.quizOption',"click",function(){

        if(this.classList[0] === codeQuestions[qOn].answerIs){
            currentScore = currentScore + 20;
            questionResults.append("correct");
            
        }else{
            questionResults.append("incorrect");
        }

        currentQuestion.empty();

        quizOptionList.empty();

        questionResults.empty();

        qOn++;
    
        if(qOn < codeQuestions.length){
            loadQuestion(qOn);
        }else{
            loadQuizEnd();
        }

    });

});