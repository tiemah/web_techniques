// use the setTimeout() to specify the time it will take(delay) to display the output
const name = "Doreen";
function display(name){
   setTimeout(() => {
    console.log(name)
   }, 5000);
}
display(name);