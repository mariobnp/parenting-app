// Data Panduan per Level
const levelGuides = {
  1: {
    title: "🧘‍♀️ Level 1 Selesai: Mengelola Emosi",
    content: `
      <p><strong>Hebat! Anda telah melewati tahap kesiapan emosional.</strong></p>
      <p>Penting diingat: Perubahan hormon itu nyata. Berikut tips kilat:</p>
      <ul style="text-align:left; margin-top:10px;">
        <li><strong>Validasi Perasaan:</strong> Tidak apa-apa merasa sedih tanpa alasan. Itu bukan salah Bunda.</li>
        <li><strong>Teknik 4-7-8:</strong> Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik saat merasa cemas.</li>
        <li><strong>Jujur pada Diri Sendiri:</strong> Jangan memaksakan diri menjadi 'sempurna'.</li>
      </ul>
    `,
  },
  2: {
    title: "🗣️ Level 2 Selesai: Komunikasi Pasangan",
    content: `
      <p><strong>Kunci anti-konflik adalah bicara sebelum meledak.</strong></p>
      <p>Tips komunikasi efektif Ayah & Bunda:</p>
      <ul style="text-align:left; margin-top:10px;">
        <li><strong>Gunakan "I Message":</strong> Katakan "Aku merasa lelah..." bukan "Kamu tidak membantu...".</li>
        <li><strong>Jadwal Curhat:</strong> Sempatkan 10 menit sebelum tidur tanpa gadget untuk saling tanya kabar.</li>
        <li><strong>Kode Bahaya:</strong> Buat kode kata (misal: "Merah") jika salah satu sudah di ambang batas emosi.</li>
      </ul>
    `,
  },
  3: {
    title: "🤝 Level 3 Selesai: Support System",
    content: `
      <p><strong>Ingat, membesarkan anak butuh 'satu desa'.</strong></p>
      <p>Panduan peran lingkungan:</p>
      <ul style="text-align:left; margin-top:10px;">
        <li><strong>Peran Ayah (Gatekeeper):</strong> Ayah bertugas menolak tamu jika Bunda butuh istirahat.</li>
        <li><strong>Bantuan Konkret:</strong> Minta keluarga membantu cucian/masak, bukan mengasuh bayi (agar Bunda bisa bonding).</li>
        <li><strong>Delegasi:</strong> Jangan ragu oper tugas rumah tangga.</li>
      </ul>
    `,
  },
  4: {
    title: "🧠 Level 4 Selesai: Waspada Baby Blues",
    content: `
      <p><strong>Kesehatan mental Bunda adalah prioritas utama.</strong></p>
      <p>Kenali tandanya:</p>
      <ul style="text-align:left; margin-top:10px;">
        <li><strong>Baby Blues vs PPD:</strong> Baby blues hilang < 2 minggu. Jika lebih & ada niat menyakiti, itu Depresi Postpartum.</li>
        <li><strong>Cari Bantuan:</strong> Hubungi psikolog jika sedih tak terbendung. Itu tanda sakit, bukan tanda ibu buruk.</li>
      </ul>
    `,
  },
};

// Data Pertanyaan (Dikelompokkan per Level)
// Total 12 Soal (3 soal per level) agar tidak terlalu panjang
const questions = [
  // --- LEVEL 1: EMOSI ---
  {
    numb: 1,
    level: 1,
    question:
      "Saat merasa ingin menangis tiba-tiba tanpa alasan jelas, apa yang sebaiknya Bunda lakukan?",
    answer: "a",
    options: {
      a: "Menerimanya sebagai luapan emosi hormonal yang wajar",
      b: "Menahannya agar tidak terlihat lemah",
      c: "Memarahi suami agar lega",
    },
  },
  {
    numb: 2,
    level: 1,
    question: "Apa mindset paling sehat bagi ibu baru?",
    answer: "b",
    options: {
      a: "Saya harus bisa melakukan semuanya sendiri",
      b: "Saya belajar bersama bayi, kesalahan itu wajar",
      c: "Rumah harus selalu rapi meski ada bayi",
    },
  },
  {
    numb: 3,
    level: 1,
    question: "Jika Bunda merasa jenuh mengurus bayi, itu tandanya...",
    answer: "b",
    options: {
      a: "Bunda tidak sayang anak",
      b: "Bunda butuh istirahat sejenak (recharge)",
      c: "Bunda kurang bersyukur",
    },
  },

  // --- LEVEL 2: KOMUNIKASI ---
  {
    numb: 4,
    level: 2,
    question: "Kapan waktu terbaik mendiskusikan pembagian tugas rumah tangga?",
    answer: "a",
    options: {
      a: "Jauh-jauh hari sebelum bayi lahir",
      b: "Saat bayi menangis tengah malam",
      c: "Nanti saja mengalir apa adanya",
    },
  },
  {
    numb: 5,
    level: 2,
    question:
      "Jika Ayah melakukan kesalahan saat memandikan bayi, respon Bunda sebaiknya...",
    answer: "b",
    options: {
      a: "Langsung mengambil alih sambil marah",
      b: "Memberi contoh dengan tenang tanpa menghakimi",
      c: "Melarang Ayah memandikan bayi lagi",
    },
  },
  {
    numb: 6,
    level: 2,
    question: "Kalimat mana yang lebih baik diucapkan saat lelah?",
    answer: "a",
    options: {
      a: "'Ayah, tolong pegang adik 15 menit, aku butuh mandi tenang'",
      b: "'Kamu kok main HP terus sih tidak peka banget!'",
      c: "(Diam saja tapi membanting pintu)",
    },
  },

  // --- LEVEL 3: DUKUNGAN ---
  {
    numb: 7,
    level: 3,
    question: "Apa tugas utama Ayah saat ada tamu berkunjung melihat bayi?",
    answer: "b",
    options: {
      a: "Ikut mengobrol seru dengan tamu",
      b: "Memastikan kunjungan singkat & Bunda tidak kelelahan",
      c: "Membiarkan tamu menggendong bayi sepuasnya",
    },
  },
  {
    numb: 8,
    level: 3,
    question:
      "Bantuan seperti apa yang paling tepat diminta dari mertua/orang tua?",
    answer: "c",
    options: {
      a: "Komentar tentang cara menyusui",
      b: "Mengambil alih bayi sepenuhnya",
      c: "Urusan logistik (makanan/cucian) agar Bunda fokus ke bayi",
    },
  },
  {
    numb: 9,
    level: 3,
    question: "Lingkungan yang mendukung ibu baru adalah lingkungan yang...",
    answer: "a",
    options: {
      a: "Tidak banyak mengkritik dan membandingkan",
      b: "Selalu memberi nasehat meski tidak diminta",
      c: "Sering datang bertamu tanpa kabar",
    },
  },

  // --- LEVEL 4: PENGETAHUAN BABY BLUES ---
  {
    numb: 10,
    level: 4,
    question: "Mana yang merupakan gejala wajar Baby Blues (bukan Depresi)?",
    answer: "a",
    options: {
      a: "Mood swing (senang lalu sedih) di 2 minggu pertama",
      b: "Ada bisikan ingin menyakiti diri sendiri",
      c: "Tidak mau menyentuh bayi sama sekali selama sebulan",
    },
  },
  {
    numb: 11,
    level: 4,
    question:
      "Jika perasaan sedih menetap lebih dari 2 minggu dan mengganggu aktivitas, itu tanda...",
    answer: "b",
    options: {
      a: "Ibu kurang iman",
      b: "Postpartum Depression (PPD) butuh bantuan ahli",
      c: "Kelelahan biasa",
    },
  },
  {
    numb: 12,
    level: 4,
    question: "Siapa yang bertanggung jawab menjaga kesehatan mental ibu?",
    answer: "c",
    options: {
      a: "Hanya ibu sendiri",
      b: "Hanya dokter",
      c: "Kerjasama Ibu, Ayah, dan keluarga terdekat",
    },
  },
];
