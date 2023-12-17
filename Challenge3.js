const readline = require('readline');

// Create a readline interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a prompt to get the user's gross salary
rl.question("What is your monthly income: ", (grossSalary) => {
    // Create a prompt to get the Contribution Benefit
    rl.question("What is your Contribution Benefit (including mortgage interest amounts, insurance premiums, and home ownership total deposit): ", (contributionBenefit) => {
        // Convert input values to numbers
        grossSalary = parseFloat(grossSalary);
        contributionBenefit = parseFloat(contributionBenefit);

        // Subtract Contribution Benefit from Gross Salary
        grossSalary -=contributionBenefit;

        // Calculate NSSF contribution (assuming 6%)
        let NSSF = 0.06 * grossSalary;
        NSSF = Math.min(NSSF, 18000); // Cap NSSF at 18000
        grossSalary -= NSSF;

        // Calculate PAYE
        let PAYE;
        if (grossSalary <= 24000) {
            PAYE = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            PAYE = grossSalary * 0.25;
        } else if (grossSalary <= 500000) {
            PAYE = grossSalary * 0.3;
        } else if (grossSalary <= 800000) {
            PAYE = grossSalary * 0.325;
        } else {
            PAYE = grossSalary * 0.35;
        }

        // Calculate NHIF contribution
        let NHIF;
        // NHIF calculation based on grossSalary
        if (grossSalary <= 5999){
            NHIF = 150;
        } else if (grossSalary <= 7999){
            NHIF = 300;
        } else if (grossSalary <= 11999){
            NHIF = 400;
        } else if (grossSalary <= 14999){
            NHIF = 500;
        } else if (grossSalary <= 19999){
            NHIF = 600;
        } else if (grossSalary <= 24999){
            NHIF = 750;
        } else if (grossSalary <= 29999){
            NHIF = 850;
        } else if (grossSalary <= 34999){
            NHIF = 900;
        } else if (grossSalary <= 39999){
            NHIF = 950;
        } else if (grossSalary <= 44999){
            NHIF = 1000;
        } else if (grossSalary <= 49999){
            NHIF = 1100;
        } else if (grossSalary <= 59999){
            NHIF = 1200;
        } else if (grossSalary <= 69999){
            NHIF = 1300;
        } else if (grossSalary <= 79999){
            NHIF = 1400;
        } else if (grossSalary <= 89999){
            NHIF = 1500;
        } else if (grossSalary <= 99999){
            NHIF = 1600;
        } else {
            NHIF = 1700;
        }

        // Calculate net salary
        const netSalary = grossSalary - PAYE - NHIF - NSSF;

        // Output results
        console.log(`PAYE owed: ${PAYE}`);
        console.log(`NHIF contribution: ${NHIF}`);
        console.log(`NSSF contribution: ${NSSF}`);
        console.log(`Net Salary: ${netSalary}`);
        console.log("This are estimates and are non factual");

        // Close the readline interface
        rl.close();
    });
});
