class AsyncFactorialAPI {
    constructor() {
      this.result = null;
    }
    
  
    computeFactorial(number, callback) {
      // Check for negative numbers
      if (number < 0) {
        setTimeout(() => {
          callback(new Error('Factorial is undefined for negative numbers.'));
        }, 3000);
        return;
      }
  
      // Check for upper limit
      if (number > 10) {
        setTimeout(() => {
          callback(new Error('Input exceeds the upper limit of 10.'));
        }, 3000);
        return;
      }
  
      // Simulate asynchronous computation using setTimeout
      setTimeout(() => {
        let result = 1;
        for (let i = 2; i <= number; i++) {
          result *= i;
        }
  
        // Store the result in the API's property
        this.result = result;
        callback(null, result);
      }, 3000); // 3 seconds delay
    }
  }
  
  // Create an instance of the AsyncFactorialAPI
  const api = new AsyncFactorialAPI();
  
  // Define an array of numbers for which we want to generate factorials
  const numbers = [5, 7, 3, 4];
  
  // Function to generate factorials one after the other
  function generateFactorials(numbers) {
    let currentIndex = 0;
  
    function generateNextFactorial() {
      if (currentIndex < numbers.length) {
        const number = numbers[currentIndex];
        console.log(`Generating factorial of ${number}...`);
        
        // Call the asynchronous function to compute factorial
        api.computeFactorial(number, (error, result) => {
          if (error) {
            console.error(`Error computing factorial of ${number}:`, error.message);
          } else {
            console.log(`Factorial of ${number}:`, result);
            currentIndex++;
            generateNextFactorial(); // Generate the next factorial recursively
          }
        });
      }
    }
  
    // Start generating factorials
    generateNextFactorial();
  }
  
  // Start generating factorials for the array of numbers
  generateFactorials(numbers);
  