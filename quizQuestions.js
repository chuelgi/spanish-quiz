const quizQuestions = [
	{
		question:
			'What is the present tu form of rogar?',
		id: 1,
		choices: {
			a: 'rogabas',
			b: 'rogas',
			c: 'rogaste',
			d: 'ruegas',
		},
		answer: 'd',
	},
	{
		question:
			'Which word triggers the subjunctive?',
		id: 2,
		choices: {
			a: 'pasar',
			b: 'gritar',
			c: 'dudar',
			d: 'decir',
		},
		answer: 'c',
	},
	{
		question:
			'Which concept triggers the subjunctive?',
		id: 3,
		choices: {
			a: 'wishes',
			b: 'thougts',
			c: 'examples',
			d: 'past events',
		},
		answer: 'a',
	},
	{
		question:
			'Which does the 3rd person imperfect AR verb end in?',
		id: 4,
		choices: {
			a: 'aron',
			b: 'aban',
			c: 'ieron',
			d: 'abas',
		},
		answer: 'b',
	},
	{
		question:
			"Which sdoes the 3rd person imperfect ER/IRverb end in?",
		id: 5,
		choices: {
			a: 'ía',
			b: 'aban',
			c: 'ían',
			d: 'íamos',
		},
		answer: 'c',
	},
	{
		question:
			"Tengo que _____ mi perro este semana.",
		id: 6,
		choices: {
			a: 'lavando',
			b: 'lavamos',
			c: 'lavo',
			d: 'lavar',
		},
		answer: 'd',
	},
	{
		question: 'Mi amiga Ana tiene los ojos...?',
		id: 7,
		choices: {
			a: 'verdes',
			b: 'azulos',
			c: 'verde',
			d: 'blanco',
		},
		answer: 'a',
	},
	{
		question:
			"Cuando yo ___ niña tenía dos perros.",
		id: 8,
		choices: {
			a: 'soy',
			b: 'estaba',
			c: 'fue',
			d: 'era',
		},
		answer: 'd',
	},
	{
		question:
			'How do you say 90?',
		id: 9,
		choices: {
			a: 'setenta',
			b: 'ochenta',
			c: "noventa",
			d: "sesenta",
		},
		answer: 'c',
	},
	{
		question:
			'Which of these is a false cognate?',
		id: 10,
		choices: {
			a: 'limpiando',
			b: 'embarazado',
			c: 'cerdo',
			d: 'corre',
		},
		answer: 'b',
	},
];
let currentQuestionIndex = 0;

let curScore = 0;

//text to display right or wrong
const respond = document.getElementById("is-right");

//nextbutton
const nextButton = document.getElementById("next-button");

//score;
const score = document.getElementById("score");
const scoreDisplay = document.getElementById("score-display");

function quizStart() {
	//displays first question	
	showQuestion(currentQuestionIndex);
}

function showQuestion(questionIndex){
	const currentQ = quizQuestions[questionIndex];
	console.log("current q is: " + questionIndex);
	//set place
	const questionPlace = document.getElementById("question-place");
	questionPlace.innerText = currentQ.id;

	//set question text
	var quest = document.getElementById('display-question');
    quest.innerText = currentQ.question;

	const choicesContainer = document.getElementById("choices-container");
	//clear choices
	choicesContainer.innerHTML = "";

	//generate choices 
    Object.values(currentQ.choices).forEach((choiceText, choiceIndex) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choiceText;
        choiceButton.onclick = () => selectChoice(choiceIndex);

		// Add the CSS class
		choiceButton.classList.add("choice-button");
		
        choicesContainer.appendChild(choiceButton);
    });



	//

}

function selectChoice(choiceIndex){
	selectedChoiceIndex = choiceIndex;

    // Highlight the selected choice visually (you can apply CSS styles here)
    const choiceButtons = document.querySelectorAll(".choice-button");
    choiceButtons.forEach((button, index) => {
        if (index === choiceIndex) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });

	if (currentQuestionIndex === quizQuestions.length - 1) {
        // Hide the Next button for the last question
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "block";
    }

	checkAnswer(choiceIndex);
}



//displays next question
function getNext() {
	//hide next
    nextButton.style.display = "none";
	//hide response
	respond.style.display = "none"
	console.log("quiz ");
if(currentQuestionIndex ===  9){
	console.log("quiz ended");
	const scoreElement = document.getElementById("score");
	const scoreDisplay = document.getElementById("score-display");
	scoreDisplay.style.display = "block";
	scoreElement.innerText = curScore;
	console.log("score is " + score);
	return;
}else{
	currentQuestionIndex++;
	showQuestion(currentQuestionIndex);
}
	
}

function checkAnswer(selectedAnswer) {
	const correctAnswer = quizQuestions[currentQuestionIndex].answer;

	if(correctAnswer === 'a' && selectedAnswer === 0){
		curScore++;
		respond.style.display = "block";
		respond.innerText = "Correct";
	} else if(correctAnswer === 'b' && selectedAnswer === 1){
		respond.innerText = "Correct";
		curScore++;
		respond.style.display = "block";
	} else if(correctAnswer === 'c' && selectedAnswer === 2){
		respond.innerText = "Correct";
		curScore++;
		respond.style.display = "block";
	} else if(correctAnswer === 'd' && selectedAnswer === 3){
		respond.innerText = "Correct";
		curScore++;
		respond.style.display = "block";
	}
	else{
		respond.innerText = "Incorrect";
		respond.style.display = "block";
	}

		if(currentQuestionIndex ===  9){
			quizEnd();
		}
}

function quizEnd(){
	
	const scoreElement = document.getElementById("score");
	const scoreDisplay = document.getElementById("score-display");
	scoreDisplay.style.display = "block";
	scoreElement.innerText = curScore;
	
}
