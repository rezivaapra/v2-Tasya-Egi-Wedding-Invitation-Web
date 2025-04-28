// Tanggal acara (format: Tahun-Bulan-Tanggal Jam:Menit:Detik)
const eventDate = new Date('2025-04-14T10:00:00').getTime(); // Ganti dengan tanggal acara Anda

function updateCountdown() {
  const now = new Date().getTime(); // Waktu saat ini
  const timeLeft = eventDate - now; // Selisih waktu dalam milidetik

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Tampilkan countdown di elemen HTML
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown setiap 1 detik
const countdownInterval = setInterval(updateCountdown, 1000);

// Jalankan fungsi pertama kali untuk menghindari delay
updateCountdown();