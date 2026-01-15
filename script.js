// Navbar toggle
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("show");
  });
});

// CV Download (for all download buttons)
document.querySelectorAll('.download-cv').forEach(button => {
  button.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'mahi resume.pdf';
    link.download = 'mahi resume.pdf';
    link.click();
  });
});

// Contact Form submission with EmailJS
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const number = form.querySelector('input[name="number"]').value.trim(); // ✅ FIX
  const subject = form.querySelector('input[name="subject"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !number || !subject || !message) {
    alert("Please fill all required fields!");
    return;
  }

  emailjs.sendForm(
    "service_5v4sfj7",
    "template_t4th6xo",
    form
  ).then(
    function () {
      alert("Message sent successfully!");
      form.reset();
    },
    function (error) {
      alert("Failed to send message");
      console.error(error);
    }
  );
});