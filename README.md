# Toy Problems Prerequisites

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
node challenge1.js

write an input and it will give you a grade corresponding to your input

#### Challenge 2: Speed Demerit Points
open Challenge2.js

in the final statement instead of 140 write your own speed that will give you a corresponding output. either 1 point for every 5km/s exceeded, ok if its below or 70 km/s, license Suspended if acquired 12 or more points

node challenge2.js

#### Challenge 3: Net Salary Calculator
node challenge3.js
enter an example monthly income.
it will output several parameters. this include gross salary after deducting contributions, paye, nhif contribution, nssf contribution , net salary

# Author

Don Gitonga

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




