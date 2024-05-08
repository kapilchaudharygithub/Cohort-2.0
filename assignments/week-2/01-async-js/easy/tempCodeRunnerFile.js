// Initialize the counter variable
let counter = 0;

// Function to update the counter and display it
function updateCounter() {
  counter++;
  console.log(counter); // You can replace this with code to display the counter in your desired format
}

// Call the updateCounter function every second
setInterval(updateCounter, 1000);
