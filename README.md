# Toy Problems Prerequisites - title

## Table of Contents

1. [Author](#author)
2. [License](#license)
3. [Description](#description)    
4. [Setup Instructions](#setup-instructions)
   - [Fork the Repository](#1-fork-the-repository)
   - [Clone the Repository](#2-clone-the-repository)
   - [Open in Visual Studio Code](#3-open-in-visual-studio-code)
   - [Run the Programs](#4-run-the-programs)
      - [Challenge 1: Grade Calculator](#challenge-1-grade-calculator)
      - [Challenge 2: Speed Demerit Points](#challenge-2-speed-demerit-points)
      - [Challenge 3: Net Salary Calculator](#challenge-3-net-salary-calculator)
      - [Practice Solotutions](#practice-solotutions)



## Description
This project consists of three JavaScript files, each addressing specific functionalities.

### 1. Challenge 1: Grade Calculator (File: challenge1.js)
The challenge1.js file contains a program that prompts the user to input student marks. The program ensures that the input is between 0 and 100. Based on the input, the program assigns the corresponding grade according to the following scale:

- A: Greater than 79
- B: 60 to 79
- C: 50 to 59
D: 40 to 49
E: Less than 40

### 2. Challenge 2: Speed Demerit Points (File: challenge2.js)
In challenge2.js, you'll find a program that takes the speed of a car as input. If the speed is less than 70 km/s, it prints "Ok." However, for speeds exceeding the limit, the program assigns demerit points for every 5 km/s above 70. The total number of demerit points is then displayed. If a driver accumulates more than 12 points, the program prints "License suspended."

Example:
Speed: 80 km/s, Output: "Points: 2"

### 3. Challenge 3: Net Salary Calculator (File: challenge3.js)
The challenge3.js file contains a program designed to calculate an individual's Net Salary. It takes inputs for basic salary and benefits, then computes the Payee (Tax), NHIF Deductions, NSSF Deductions, Gross Salary, and Net Salary.

### 4. practiceSolutions (NOT NECCESSARY TO RUN. JUST PRACTICE CODE)
Problem 1: Bubble Sort
The bubbleSort function implements the Bubble Sort algorithm to sort an array of numbers. It iterates through the array, compares adjacent elements, and swaps them if they are in the wrong order. The process repeats until the array is sorted. An example usage demonstrates sorting an array and printing the result.

Problem 2: Staircase
The staircase function prints a staircase pattern using the '#' character. It takes a numerical input to determine the number of steps in the staircase. The example usage shows how to create an 8-step staircase.

Problem 3: Calculate Volume
The code defines an object volume representing the parameters of a cylinder (π, radius r, and height h). It then calculates the volume of the cylinder using the formula V = π * r^2 * h. The calculated volume is logged to the console.

### Packages
there are different packages that help in running the three challenges. 


## Setup Instructions
Follow these steps to set up and run the Toy Problems Prerequisite project on your local machine.

### 1. Fork the Repository
Click the **Fork** button at the top right of the repository page. This creates a copy of the project in your GitHub account.

### 2. Clone the Repository
Open your terminal or command prompt and navigate to the directory where you want to store the project.
git clone https://github.com/YOUR_USERNAME/ToyProblemPrerequisites.git
Replace **YOUR_USERNAME** with your GitHub username.

### 3. Open in Visual Studio Code
Navigate into the project folder:
**cd ToyProblemPrerequisites**

Open the project in Visual Studio Code:
**code .**

### 4. Run the Programs
Each challenge is implemented in a separate JavaScript file. To run a specific challenge, open the corresponding file in Visual Studio Code and execute it using the integrated terminal or an external terminal.

#### Challenge 1: Grade Calculator
node Challenge1.js

write an input and it will give you a grade corresponding to your input

#### Challenge 2: Speed Demerit Points
open Challenge2.js

in the final statement, instead of 140, write your own speed that will give you a corresponding output. either 1 point for every 5km/s exceeded, ok if its below or 70 km/s, license Suspended if acquired 12 or more points

it also consists of two other inputs that give corresponding output.

node challenge2.js

#### Challenge 3: Net Salary Calculator
node Challenge3.js
enter an example monthly income.
it will output several parameters. this include gross salary after deducting contributions, paye, nhif contribution, nssf contribution , net salary

#### Practice Solotutions
open practiceSolutions.js
node practiceSolutions.js

outputs three things. a sorted array through bubble sort. you can change the values on the unsorted array in practiceSolutions.js

a # staircase depending on a number input. you can change the number in the called function from 8 to another desired.

volume of a sphere. you can change the values of height and radius by using either volume.h = newvalue or volume.r = newvalue





# Author

Don Gitonga

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) [2023] [Don Gitonga]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


