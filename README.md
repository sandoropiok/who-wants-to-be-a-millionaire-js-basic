# 💸💸💸Who Wants to Be a Millionaire? (Console Edition)💸💸💸

This is a simple text-based mini-game inspired by the popular game show **Who Wants to Be a Millionaire?**. It runs in the terminal using Node.js and the `readline-sync` package.

## Features

- Multiple-choice questions with four options.
- Earn prize money by answering questions correctly.
- The game ends when a wrong answer is given.
- Accumulate prize money for each correct answer.

## Installation

1. Clone the repository:
    ```bash
    https://github.com/sandoropiok/who-wants-to-be-a-millionaire-js-basic
    cd who-wants-to-be-a-millionaire-js-basic
    ```

2. Install dependencies:
    ```bash
    npm install readline-sync
    ```

3. Run the game:
    ```bash
    node game.js
    ```

## How to Play

1. The game will ask you multiple-choice questions.
2. Select the correct answer by typing the number corresponding to the option.
3. For each correct answer, you win prize money.
4. The game ends if you give an incorrect answer.

## Example Gameplay:
```
Welcome to 'Who Wants to Be a Millionaire!'
Answer the following questions to win the prize.

Question 1: Which planet is known as the Red Planet?
1. Earth
2. Mars
3. Jupiter
4. Saturn
Your answer (1-4): 2
Correct! You have won $100. Total: $100

Question 2: What is the largest ocean on Earth?
1. Atlantic Ocean
2. Indian Ocean
3. Pacific Ocean
4. Arctic Ocean
Your answer (1-4): 3
Correct! You have won $200. Total: $300

...
```

