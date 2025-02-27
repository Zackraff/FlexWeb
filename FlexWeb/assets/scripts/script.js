// Elemen modal dan tombol close-nya
const modal = document.getElementById("myModal");
const closeModal = document.querySelector(".close");
const payNowBtn = document.getElementById("payNowBtn");

// Mengambil data dari tiap "Type Rumah" untuk masing-masing harga
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Fungsi untuk membuka modal dan menampilkan info harga
function openModal(price, additionalInfo) {
  const modalMessage = document.getElementById("modalMessage");
  const priceData = document.getElementById("priceData");
  const additional = document.getElementById("additionalInfo");

  // Update konten modal sesuai harga yang dipilih
  priceData.textContent = `Amount: ${price}`;
  additional.textContent = additionalInfo;

  // Menampilkan modal
  modal.style.display = "block";

  // Klik tombol "Pay Now"
  payNowBtn.onclick = function () {
    alert("Proses pembayaran...");
    modal.style.display = "none";
  };

  // Menampilkan pesan pembayaran berhasil
  setTimeout(() => {
    alert("Pembayaran Berhasil, Terima Kasih!");
    modal.style.display = "none";
  }, 2000); // Menunggu 2 detik sebelum menampilkan pesan berhasil
}

// Event listener buat tombol harga
btn1.addEventListener("click", () => openModal("$1,000,000", "This is the total amount for your transaction."));
btn2.addEventListener("click", () => openModal("$2,500,000", "This is the total amount for your transaction."));
btn3.addEventListener("click", () => openModal("$4,000,000", "This is the total amount for your transaction."));

// Kalau tombol close diklik, modalnya ditutup
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Kalau klik di luar modal, modalnya juga ditutup
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
