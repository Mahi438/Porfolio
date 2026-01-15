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

  document.getElementById('downloadCv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'mahi resume.pdf'; // path to your CV
    link.download = 'mahi resume.pdf';
    link.click();
  });
  document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_5v4sfj7",
    "template_t4th6xo",
    this
  ).then(
    function() {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("Failed to send message");
      console.log(error);
    }
  );
});