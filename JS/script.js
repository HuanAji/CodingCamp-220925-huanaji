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
