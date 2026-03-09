const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Optional: Change the button text based on the current mode
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Dark Mode";
  } else {
    toggleBtn.textContent = "Light Mode";
  }
});
