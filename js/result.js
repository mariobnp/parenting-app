document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil Data dari Session
  const dadName = sessionStorage.getItem("dadName");
  const momName = sessionStorage.getItem("momName");
  const momAge = parseInt(sessionStorage.getItem("momAge"));
  const pregnancyStatus = sessionStorage.getItem("pregnancyStatus");
  const isPlanned = sessionStorage.getItem("isPlanned");
  // Ambil jumlah benar dari temp storage yg diupdate di quiz.js
  const correctAnswers = parseInt(sessionStorage.getItem("tempCorrect") || 0);

  // Kalkulasi Skor (0-100)
  const score = Math.round((correctAnswers / 15) * 100);

  // 2. Tentukan Kategori
  let category = "";
  let badgeClass = "";

  if (score >= 85) {
    category = "Sangat Siap";
    badgeClass = "badge-ready";
  } else if (score >= 70) {
    category = "Siap";
    badgeClass = "badge-ready";
  } else if (score >= 55) {
    category = "Cukup Siap";
    badgeClass = "badge-ok";
  } else {
    category = "Perlu Persiapan";
    badgeClass = "badge-prep";
  }

  // 3. Logic Rekomendasi Advanced
  let recommendation = "";

  // Logic 1: Nilai rendah & tidak direncanakan (Prioritas Tinggi)
  if (score < 70 && isPlanned === "no") {
    recommendation = `Halo Ayah ${dadName} & Bunda ${momName}, kehamilan yang tidak direncanakan memang mengejutkan. Berdasarkan hasil, kami sangat menyarankan fokus pada <strong>Kesiapan Mental & Perencanaan Finansial</strong>. Jangan ragu konsultasi profesional agar tidak stress berlarut.`;
  }
  // Logic 2: Nilai Tinggi tapi Anak ke-2/3 (Challenge berbeda)
  else if (
    score >= 80 &&
    (pregnancyStatus === "2" || pregnancyStatus === "3")
  ) {
    recommendation = `Luar biasa! Pengalaman Ayah ${dadName} & Bunda ${momName} sudah matang. Tantangan berikutnya adalah <strong>Manajemen Waktu & Emosi</strong> agar kasih sayang terbagi adil antara si Kakak dan Newborn.`;
  }
  // Logic 3: Ibu Usia Muda (<21) atau Lanjut (>35)
  else if (momAge < 21 || momAge > 35) {
    recommendation = `Skor Anda ${category}. Namun perhatikan faktor usia Bunda. Fokuslah pada <strong>Kesehatan Fisik & Nutrisi</strong> serta dukungan keluarga besar untuk membantu masa pemulihan nanti.`;
  }
  // Logic 4: Default based on Score
  else if (score >= 70) {
    recommendation = `Selamat Ayah ${dadName} & Bunda ${momName}! Kekompakan kalian sudah modal besar. Pertahankan komunikasi terbuka dan terus belajar hal teknis seputar bayi baru lahir.`;
  } else {
    recommendation = `Ayah ${dadName} & Bunda ${momName}, menjadi orang tua adalah proses belajar. Nilai ini bukan akhir, tapi awal untuk lebih banyak membaca dan diskusi berdua tentang pembagian peran. Semangat!`;
  }

  // 4. Render ke HTML
  document.getElementById(
    "user-greeting"
  ).innerText = `Hasil Asesmen: ${dadName} & ${momName}`;
  document.getElementById("score-display").innerText = score;

  const catEl = document.getElementById("category-display");
  catEl.innerText = category;
  catEl.className = `badge ${badgeClass}`;

  document.getElementById("recommendation-text").innerHTML = recommendation;

  // 5. Button Handler ke Google Drive
  document.getElementById("btn-download").addEventListener("click", () => {
    window.open(
      "https://drive.google.com/file/d/1qtpXPG3niZ95M0LaaPcZyQLcPrtOmwHx/view?usp=sharing",
      "_blank"
    );
  });

  // Tombol Ulang
  document.getElementById("btn-restart").addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "index.html";
  });
});
