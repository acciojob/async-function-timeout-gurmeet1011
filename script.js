// Function to simulate delay with a promise
const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Button click event handler
document.getElementById("btn").addEventListener("click", async () => {
  // Get user inputs
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  // Clear the output div
  outputDiv.textContent = "";

  // Validation for inputs
  if (textInput.trim() === "" || isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Invalid input. Please provide valid text and delay.";
    return;
  }

  // Wait asynchronously and update the output
  await wait(delayInput); // Introduce delay
  outputDiv.textContent = textInput; // Update the output after delay
});




