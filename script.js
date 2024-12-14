// Function to introduce a delay using a promise
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Handling the click event on the button
document.getElementById("btn").addEventListener("click", async () => {
  // Retrieve user input
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.textContent = "Processing...";

  // Validate inputs
  if (textInput.trim() === "" || isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Invalid input. Please provide valid text and delay.";
    return;
  }

  // Await the specified delay
  await wait(delayInput);

  // Display the user-provided text
  outputDiv.textContent = textInput;
});


