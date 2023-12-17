// Problem 1: Bubble Sort

// Function to perform bubble sort on an array
function bubbleSort(arr) {
    let swapped;
  
    // Repeat until no more swaps are needed
    do {
      swapped = false;
  
      // Iterate through the array
      for (let i = 0; i < arr.length - 1; i++) {
        // Compare adjacent elements and swap if in the wrong order
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr; // Return the sorted array
  }
  
  // Example usage:
  let unsortedArray = [5, 6, 1, 3, 4, 2];
  let sortedArray = bubbleSort(unsortedArray.slice());
  console.log("Sorted Array:", sortedArray);
  
  
  // Problem 2: Staircase
  
  // Function to print a staircase pattern with '#' character
  function staircase(num) {
    for (let i = 0; i <= num; i++) {
      console.log('#'.repeat(i)); // Log '#' repeated 'i' times
    }
  }
  
  // Example usage:
  staircase(8);
  
  
  // Problem 3: Calculate Volume
  
  // Object representing volume with π, radius (r), and height (h)
  let volume = {
    π: Math.PI,
    r: 6,
    h: 4
  }
  
  // Calculate the volume of a cylinder using the formula V = π * r^2 * h
  let v = volume.π * Math.pow(volume.r, 2) * volume.h;
  console.log(v); // Log the calculated volume
  