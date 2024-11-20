// Select the form and input fields
const contactForm = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Add an event listener to handle form submission
contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate the inputs
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Create a message object
  const messageData = {
    name: name,
    email: email,
    message: message,
    date: new Date().toLocaleString(),
  };

  // Store the message in localStorage
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(messageData);
  localStorage.setItem("messages", JSON.stringify(messages));

  // Provide user feedback
  alert("Your message has been sent successfully!");

  // Clear the form
  contactForm.reset();
});

// Function to retrieve stored messages (for admin or debugging purposes)
function getMessages() {
  return JSON.parse(localStorage.getItem("messages")) || [];
}

// Example: Log messages to the console (you can remove this in production)
console.log(getMessages());
