const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Username dan password default
  const validUser = "Molaa";
  const validPass = "12345";

  if (user === validUser && pass === validPass) {
    alert("Login Berhasil 🎉");
    window.location.href = "home.html"; // jika ingin redirect
  } else {
    alert("Login gagal! Username atau password salah ❌");
  }
});