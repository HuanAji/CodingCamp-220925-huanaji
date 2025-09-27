// Smooth scroll for navbar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
// Script untuk menampilkan hasil input form ke box kanan
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const resultContent = document.getElementById("result-content");
  const currentTime = document.getElementById("current-time");

  function updateTime() {
    const now = new Date();
    currentTime.textContent = now.toString();
  }
  updateTime();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    updateTime();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const gender =
      form.querySelector('input[name="gender"]:checked')?.value || "";
    const message = document.getElementById("message").value;
    resultContent.innerHTML =
      `<b>Nama :</b> ${name}<br>` +
      `<b>Tanggal Lahir :</b> ${date}<br>` +
      `<b>Jenis Kelamin :</b> ${gender}<br>` +
      `<b>Pesan :</b> ${message}`;
  });
});

// wellcome massage
welcomeMessage();

function welcomeMessage() {
  let userName = prompt("Please enter your name:", "Ahmad");
  document.getElementById("username").textContent = userName;
}
