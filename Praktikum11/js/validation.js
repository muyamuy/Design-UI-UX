const form = document.getElementById("ticketForm");
const summary = document.getElementById("summary");

function setError(id, msg) {
  const errSpan = document.getElementById(id);
  errSpan.textContent = msg;
  
  const inputField = errSpan.previousElementSibling;
  if (msg) inputField.classList.add("field-invalid");
  else inputField.classList.remove("field-invalid");
}

function clearErrors() {
  setError("err-nama", "");
  setError("err-email", "");
  setError("err-jam", "");
  setError("err-tujuan", "");
  setError("err-tiket", "");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidJam(jam) {
  if (!/^\d{2}\.\d{2}$/.test(jam)) return false;
  const [hh, mm] = jam.split(".").map(num => parseInt(num));
  return hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59;
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  clearErrors();
  let valid = true;

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const jam = document.getElementById("jam").value.trim();
  const tujuan = document.getElementById("tujuan").value.trim();
  const tiket = document.getElementById("tiket").value.trim();

  if (!nama) { setError("err-nama", "Nama wajib diisi"); valid = false; }
  else if (nama.length > 30) { setError("err-nama", "Maksimal 30 karakter"); valid = false; }

  if (!email) { setError("err-email", "Email wajib diisi"); valid = false; }
  else if (!isValidEmail(email)) { setError("err-email", "Format email tidak valid"); valid = false; }

  if (!jam) { setError("err-jam", "Jam wajib diisi"); valid = false; }
  else if (!isValidJam(jam)) { setError("err-jam", "Format harus HH.MM (00.00–23.59)"); valid = false; }

  if (!tujuan) { setError("err-tujuan", "Tujuan wajib diisi"); valid = false; }

  const tiketNum = parseInt(tiket);
  if (!tiket) { setError("err-tiket", "Jumlah wajib diisi"); valid = false; }
  else if (!Number.isInteger(tiketNum) || tiketNum < 1 || tiketNum > 10) {
    setError("err-tiket", "Jumlah harus 1–10");
    valid = false;
  }

  if (valid) {
    summary.style.display = "block";
    summary.innerHTML = `
      <h3>Data Pemesanan:</h3>
      <p>Nama : ${nama}</p>
      <p>Email : ${email}</p>
      <p>Jam Keberangkatan : ${jam}</p>
      <p>Tujuan : ${tujuan}</p>
      <p>Jumlah Tiket : ${tiketNum}</p>
    `;
  } else {
    summary.style.display = "none";
  }
});