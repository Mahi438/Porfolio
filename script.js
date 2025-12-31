const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("show");
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault(); // Prevent actual form submission

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields!");
    return;
  }

  alert("Thank you, your message has been submitted!");
  form.reset(); // Clear form
});