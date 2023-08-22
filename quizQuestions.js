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

function quizStart() {
    console.log("quizStart() function is running.")
	const currentQ = quizQuestions[0];
    // set the question text
    var quest = document.getElementById('display-question');
    quest.innerText = currentQ.question;

	// update question place
	var quest = document.getElementById('question-place');
	quest.innerText = currentQ.id;

	    // Set the options text for the first question
		document.getElementById('option-one-label').innerText = currentQ.choices.a;
		document.getElementById('option-two-label').innerText = currentQ.choices.b;
		document.getElementById('option-three-label').innerText = currentQ.choices.c;
		document.getElementById('option-four-label').innerText = currentQ.choices.d;
}

//counter for question
let i = 1;

//displays next question
function getNext() {
	console.log("getNext() function is running.")
	//if i == 9 call function to show quiz results/ end quiz
	if(i >= quizQuestions.length){
		return;
	}
	//retrieve question
	const currentQ = quizQuestions[i];

	let quest = document.getElementById('question-place');
	quest.innerText = currentQ.id;

	//set question text
	quest = document.getElementById('display-question');
	quest.innerText = currentQ.question;

	//set choices text
	document.getElementById('option-one-label').innerText = currentQ.choices.a;
	document.getElementById('option-two-label').innerText = currentQ.choices.b;
	document.getElementById('option-three-label').innerText =
		currentQ.choices.c;
	document.getElementById('option-four-label').innerText =
		currentQ.choices.d;
	i++;

	// Show the "Next" button
	document.getElementById("next-button").style.display = "block";

	// Call the checkAnswer function to compare the selected answer
	checkAnswer('');
	
}

function checkAnswer(selectedAnswer) {
    const currentQ = quizQuestions[i - 1]; // Get the current question

    // Compare the selected answer with the correct answer
    if (selectedAnswer === currentQ.answer) {
        console.log("Correct!");
    } else {
        console.log("Incorrect!");
    }

    // Show the "Next" button
    document.getElementById("next-button").style.display = "block";
}


