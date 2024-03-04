// function getRandomDelay(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   async function executeWithRandomDelay() {
//     const minDelay = 1000; // Minimum delay time in milliseconds
//     const maxDelay = 5000; // Maximum delay time in milliseconds
  
//     const delayTime = getRandomDelay(minDelay, maxDelay);
  
//     setTimeout(() => {
//       console.log(`Code executed after ${delayTime} milliseconds.`);
//     }, delayTime);
//   }
  
//   executeWithRandomDelay();
  
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function executeWithRandomDelay(callback) {
    const minDelay = 1000; // Minimum delay time in milliseconds
    const maxDelay = 5000; // Maximum delay time in milliseconds
  
    const delayTime = getRandomDelay(minDelay, maxDelay);
  
    setTimeout(() => {
      console.log(`Code executed after ${delayTime} milliseconds.`);
      callback();
    }, delayTime);
  }
  
  // Usage
  executeWithRandomDelay(() => {
    console.log("Callback function executed.");
  });
  