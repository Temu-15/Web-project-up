const menuIcon = document.querySelector(".menu-icon");
const navigationContainer = document.querySelector(".navigation");
const navIcon = document.querySelector(".nav-icon");
menuIcon.addEventListener("click", function () {
  navigationContainer.style.height = "100vh";
  console.log("abebe");
  navIcon.style.display = "block";
});

navIcon.addEventListener("click", function () {
  navigationContainer.style.height = "0";
  navIcon.style.display = "none";
});

var typed = new Typed(".career", {
  strings: ["Software Engineer", "Full-stack developer", "System Manager"],
  typeSpeed: 200,
  backSpeed: 200,
  loop: true,
});

// document.querySelector("btn-contacts").addEventListener("click", (e) => {
//   e.preventDefault();

//   const contactForm = document.querySelector("#form");

//   let data = new FormData(contactForm);
//   fetch("http://127.0.0.1:5500/Components/Contacts.html", {
//     method: "POST",
//     body: data,
//   });

//   alert("Thank you, your form was submitted.");

//   contactForm.reset();
// });
