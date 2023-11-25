const xhrAPI = new XMLHttpRequest(); //Creating an object of the API



// Adding event listeners

xhrAPI.addEventListener('load', 


function(){
    if(xhrAPI.status === 200){ //checks if the request was successful
        console.log("Request was successful:", xhrAPI.responseText);
        console.timeEnd();

}



else{
    console.error("Error:", xhrAPI.statusText); //handles errors r other HTTP ststus error codes
}
});

// Event listener for the "error" event (if the request encounters an error)
xhrAPI.addEventListener('error', function () {
    console.error('Request encountered an error.');
});

//Specifying that we are making a GET request to the server
xhrAPI.open('GET', 'https://jsonplaceholder.typicode.com/', true); //Used JSONPlaceholder url for testing
console.time();
// console.timeEnd();

// Invoking the asynchronous operation using the send method
xhrAPI.send();
