document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("success-message").style.display = "block";
  this.reset();
});
