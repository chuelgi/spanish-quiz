const quizQuestions = [
	{
		question:
			'Which HTML5 element should contain important links for navigating a website?',
		id: 1,
		topic: 'html',
		choices: {
			a: '<li>',
			b: '<ul>',
			c: '<header>',
			d: '<nav>',
		},
		answer: 'd',
	},
	{
		question:
			'Which HTML5 element should contain important information about what page you are on and the topic of the page?',
		id: 2,
		topic: 'html',
		choices: {
			a: '<li>',
			b: '<ul>',
			c: '<header>',
			d: '<nav>',
		},
		answer: 'c',
	},
	{
		question:
			'Which JavaScript variable declaration is used when the assigned value is likely to change?',
		id: 3,
		topic: 'javascript',
		choices: {
			a: 'let',
			b: 'var',
			c: 'variable',
			d: 'const',
		},
		answer: 'a',
	},
	{
		question:
			'Which term in JavaScript can be used to describe a declared variable that has not yet been given a value?',
		id: 4,
		topic: 'javascript',
		choices: {
			a: 'null',
			b: 'undefined',
			c: 'typeError',
			d: 'NaN',
		},
		answer: 'b',
	},
	{
		question:
			"Which selector could refer to an html element with the class of 'sm-col'?",
		id: 5,
		topic: 'css',
		choices: {
			a: '#sm-col',
			b: '.sm, .col',
			c: '[class~=col]',
			d: '.sm_col',
		},
		answer: 'c',
	},
	{
		question:
			"Setting an element height to '10vh' bases the height calculation on _________",
		id: 6,
		topic: 'css',
		choices: {
			a: 'viewfinder height',
			b: 'viewport width',
			c: 'visible height',
			d: 'viewport height',
		},
		answer: 'd',
	},
	{
		question: 'Which HTML5 property can be used for custom data?',
		id: 7,
		topic: 'html',
		choices: {
			a: 'data-',
			b: '-data-',
			c: 'data=',
			d: 'custom',
		},
		answer: 'a',
	},
	{
		question:
			"Which HTML5 tag is used to define 'independant, self-contained content' within a web page?",
		id: 8,
		topic: 'html',
		choices: {
			a: '<section>',
			b: '<main>',
			c: '<aside>',
			d: '<article>',
		},
		answer: 'd',
	},
	{
		question:
			'Which of the following snippets does not result in a return value of 8?',
		id: 9,
		topic: 'javascript',
		choices: {
			a: '8**1',
			b: 'Math.pow(16, .75)',
			c: "2 * 2 * 'two'",
			d: "2**+'3'",
		},
		answer: 'c',
	},
	{
		question:
			'Which of these statements is NOT true of browser-side JavaScript?',
		id: 10,
		topic: 'javascript',
		choices: {
			a: 'JavaScript can be used for functional programming.',
			b: 'JavaScript can be used for file reading and writing on client machines.',
			c: 'JavaScript does not require frameworks or libraries to be used.',
			d: 'Though not class-based, JavaScript is an Object-Oriented Programming Language.',
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
