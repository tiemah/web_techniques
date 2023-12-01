function makeAsyncHttpRequest(url, callback) { //This line defines a function named makeAsyncHttpRequest that takes two parameters - url (the URL to make the HTTP request to) and callback (a function to handle the response or error)
    var xhr = new XMLHttpRequest();
  
    // Configure the request
    xhr.open('GET', url, true);
  
    // Set up event handler for when the request is complete
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Successful response
        callback(null, xhr.responseText);
      } else {
        // Request failed
        callback(new Error('HTTP request failed with status ' + xhr.status));
      }
    };
  
    // Set up event handler for network errors
    xhr.onerror = function () {
      callback(new Error('Network error occurred'));
    };
  
    // Send the request(HTTP request)
    xhr.send();
  }
  
  // Example usage of the function
  const apiUrl = 'https://jsonplaceholder.typicode.com/';
  
  makeAsyncHttpRequest(apiUrl, function (error, response) { //calls the makeAsyncHttpRequest function with the provided URL and a callback function
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Response:', response);
    }
  });
  