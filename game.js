const readlineSync = require('readline-sync');

// Game questions and answers
const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: 3
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["India", "Australia", "South Africa", "Canada"],
        answer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: 3
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 3
    }
];
// Game variables
let currentLevel = 0;
let prizeMoney = 0;
const prizeLevels = [100, 200, 300, 500, 1000]; // Prize for each question

// Helper function to ask a question
function askQuestion(questionObj, level) {
    console.log(`\nQuestion ${level + 1}: ${questionObj.question}`);
    questionObj.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });

    const userAnswer = readlineSync.questionInt("Your answer (1-4): ");
    if (userAnswer === questionObj.answer) {
        prizeMoney += prizeLevels[level];
        console.log(`Correct! You have won $${prizeLevels[level]}. Total: $${prizeMoney}`);
        return true;
    } else {
        console.log("Sorry, that's the wrong answer. Game over.");
        return false;
    }
}

// Start the game
console.log("Welcome to 'Who Wants to Be a Millionaire!'");
console.log("Answer the following questions to win the prize.");

while (currentLevel < questions.length) {
    const isCorrect = askQuestion(questions[currentLevel], currentLevel);
    if (!isCorrect) break; // End the game on wrong answer
    currentLevel++;
}

console.log(`\nThank you for playing! You walk away with $${prizeMoney}.`);

