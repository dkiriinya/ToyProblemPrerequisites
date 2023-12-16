// Used readline to be able to run my code without an online compiler
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// created a function gradeGenerator 
function gradeGenerator() {
    // Created a variable Numgrade that accepts a number input from 0 to 100.
    rl.question("Input the student's grade. It should be between 0 and 100: ", (Numgrade) => {
        let Lettergrade;

        // created a conditional statement that checks if Numgrade is within my limit
        if (Numgrade >= 0 && Numgrade <= 100) {
            // created an if statement that checks if the grade is greater than 79. if so, it assigns the letter grade to A
            if (Numgrade > 79) {
                Lettergrade = 'A';
            }
            // created an else if statement that checks if the grade is between 60 and 79. if so, it assigns the letter grade to B
            else if (Numgrade >= 60 && Numgrade <= 79) {
                Lettergrade = 'B';
            }
            // created an else if statement that checks if the grade is between 49 and 59. if so, it assigns the letter grade to C
            else if (Numgrade >= 49 && Numgrade <= 59) {
                Lettergrade = 'C';
            }
            // created an else if statement that checks if the grade is between 40 and 49. if so, it assigns the letter grade to D
            else if (Numgrade >= 40 && Numgrade <= 49) {
                Lettergrade = 'D';
            }
            // created an else statement that checks if the grade is below 40. if so, it assigns the letter grade to E
            else {
                Lettergrade = 'E';
            }

            console.log('Letter Grade:', Lettergrade);
        } else {
            console.log('Invalid grade. Please enter a grade between 0 and 100.');
        }

        rl.close();
    });
}

gradeGenerator();
