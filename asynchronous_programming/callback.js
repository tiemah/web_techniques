function display(callback){
    setTimeout(function(){
        console.log("Displaying...");
        callback();
    }, 5000);
}
// Callbacks are functions that will be executed once a certain action is completed, such as an asynchronous operation completing or an event occurring
// callback function to be executed after the asynchronous operation above

function callBackFunction(){
    console.log("Call back function executed!");
}
display(callBackFunction); //function call to initiate the asynchronous operation