function delayedOperation(callback) { //takes a callback function as an argument
  setTimeout(() => {
      const result = "Processed Result";
      callback(result); //Calls the provided callback function (callback) with the simulated result after the specified delay. This simulates the completion of an asynchronous operation.
  }, 5000); // Simulating a delay of 5000 milliseconds (5 seconds)
}

// Call delayedOperation and provide a callback
delayedOperation((result) => {
  // Code that depends on the result of the asynchronous operation
  console.log("Processed Result:", result);

  // Additional code that relies on the processed result
  console.log("Additional Code Executed");
});

// Code that comes after the call to setTimeout but does not depend on the result
console.log("Code after setTimeout"); //accesses unprocessed results
