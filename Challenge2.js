// create a function Speed Detector that has speed as an argument
function speedDetector(speed) {
    // Declare a variable to store the points
    let points;

    // Check if the speed is greater than 70
    if (speed > 70) {
        // Calculate the speed above the limit
        const speedCalculator = speed - 70;

        // Calculate the points based on the speed above the limit (1 point for every 5 units)
        points = speedCalculator / 5;
        // created a conditional statement that suspends a licence with points > 12
        if (points > 12){
            return "licence Suspended"
        }

        // Return a string with the points
        return `Points: ${points}`;
    } else {
        // If the speed is not greater than 70, return "ok"
        return "ok";
    }
}

// Example usage with a speed of 140
console.log(speedDetector(140));

//Example usage with a speed of 60
console.log(speedDetector(60));

//Example usage with a speed of 60
console.log(speedDetector(90))



