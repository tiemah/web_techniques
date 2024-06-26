class AsyncFactorialAPI {
    constructor() {
      this.result = null;
    }
  
    computeFactorial(number, callback) {
      // Check for negative numbers
      if (number < 0) {
        callback(new Error('Factorial is undefined for negative numbers.'));
        return;
      }
  
      // Check for upper limit
      if (number > 10) {
        callback(new Error('Input exceeds the upper limit of 10.'));
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
  
  // Driver code to test the API
  function testAsyncFactorialAPI() {
    const api = new AsyncFactorialAPI();
  
    api.computeFactorial(5, (error, result1) => {
      if (error) {
        console.error('Error:', error.message);
      } else {
        console.log('Factorial of 5:', result1); // Output after 3 seconds
      }
    });
  
    api.computeFactorial(-3, (error, result2) => {
      if (error) {
        console.error('Error:', error.message); // Error message after 3 seconds
      }
    });
  
    api.computeFactorial(12, (error, result3) => {
      if (error) {
        console.error('Error:', error.message); // Error message after 3 seconds
      }
    });
  }
  
  // Run the test
  testAsyncFactorialAPI();
  