// // THEME TOGGLE
// const toggleBtn = document.getElementById("themeToggle");
// const body = document.body;

// // Load saved theme
// if (localStorage.getItem("theme") === "light") {
//   body.classList.add("light-mode");
//   toggleBtn.textContent = "☀️";
// }

// // Toggle on click
// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("light-mode");

//   if (body.classList.contains("light-mode")) {
//     toggleBtn.textContent = "☀️";
//     localStorage.setItem("theme", "light");
//   } else {
//     toggleBtn.textContent = "🌙";
//     localStorage.setItem("theme", "dark");
//   }
// });

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Change icon
  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});