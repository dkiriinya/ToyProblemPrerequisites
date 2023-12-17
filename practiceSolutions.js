// problem 1
function bubbleSort(arr) {
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements if they are in the wrong order
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // Example usage:
  let unsortedArray = [5,6,1,3,4,2];
  let sortedArray = bubbleSort(unsortedArray.slice());
  console.log("Sorted Array:", sortedArray);

// problem 2
function staircase(num) {
    for(let i = 0; i<= num; i++){
        console.log('#'.repeat(i))
    }
}
staircase(8)

// problem 3
let volume = {
    π: Math.PI,
    r: 6,
    h: 4
}
let v = volume.π * volume.r * 2 * volume.h
console.log(v)


  