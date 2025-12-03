// kurs.js

// Data kurs terbaru
const rates = {
    USD: 16660,
    SGD: 12850,
    MYR: 4000,
    JPY: 110,
    EUR: 19500,
    SAR: 4450
};

const amountEl = document.getElementById("amount");
const currencyEl = document.getElementById("currency");
const resultEl = document.getElementById("result");

// Hitung hasil
function updateResult() {
    const amount = parseFloat(amountEl.value);
    const selectedCurrency = currencyEl.value;

    if (!amount || !selectedCurrency) {
        resultEl.value = "";
        return;
    }

    const rate = rates[selectedCurrency];
    const rupiah = amount * rate;

    // Format Rupiah
    resultEl.value = rupiah.toLocaleString("id-ID", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// Event ketika user mengetik angka atau mengubah valas
amountEl.addEventListener("input", updateResult);
currencyEl.addEventListener("change", updateResult);

// Jalankan awal
updateResult();
