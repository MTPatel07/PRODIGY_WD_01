const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-gray-900', 'shadow-md');
  } else {
    navbar.classList.remove('bg-gray-900', 'shadow-md');
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 🔥 Prevent page reload

    // ✅ Collect form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const age = formData.get("age");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");

    // ✅ Display or handle the data (you can modify this as needed)
    console.log("Form Submitted:");
    console.log({ name, age, phone, email, address });

    alert("Thank you! Your details have been submitted.");

    form.reset(); // Optional: Clear the form after submission
  });
});
