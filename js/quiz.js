document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const quizBox = document.getElementById("quiz-box");
  const guideBox = document.getElementById("guide-box");
  const quizHeader = document.getElementById("quiz-header-content");

  const questionText = document.querySelector(".question-text");
  const optionContainer = document.querySelector(".option-container");
  const nextBtn = document.querySelector(".next-btn");
  const questionCounter = document.querySelector(".question-counter");
  const guideTitle = document.getElementById("guide-title");
  const guideContent = document.getElementById("guide-content");
  const continueBtn = document.getElementById("btn-continue-level");

  let questionCount = 0;
  let correctAns = 0; 

  // Start Quiz
  showQuestion(0);

  // --- LOGIC TOMBOL NEXT ---
  nextBtn.onclick = () => {
    const currentLevel = questions[questionCount].level;

    // Cek apakah ini soal terakhir?
    if (questionCount < questions.length - 1) {
      const nextQLevel = questions[questionCount + 1].level;

      // JIKA LEVEL BERUBAH (Misal dari L1 ke L2)
      if (currentLevel !== nextQLevel) {
        showGuide(currentLevel); // Tampilkan panduan level saat ini
      } else {
        // Jika level masih sama, lanjut soal biasa
        questionCount++;
        showQuestion(questionCount);
        nextBtn.style.display = "none";
      }
    } else {
      // Jika soal terakhir (Level 4 selesai)
      showGuide(currentLevel); 

      // Ubah tombol di panduan terakhir menjadi "Lihat Hasil"
      continueBtn.innerText = "Lihat Hasil Akhir 🏆";
      continueBtn.onclick = () => {
        finishQuiz();
      };
    }
  };

  // --- LOGIC TOMBOL LANJUT DI PANDUAN ---
  continueBtn.onclick = () => {
    // Sembunyikan panduan, kembali ke kuis
    guideBox.style.display = "none";
    quizBox.style.display = "block";
    quizHeader.style.display = "flex";

    // Lanjut ke soal berikutnya
    questionCount++;
    showQuestion(questionCount);
    nextBtn.style.display = "none";
  };

  // --- FUNGSI TAMPILKAN SOAL ---
  function showQuestion(index) {
    const q = questions[index];
    questionText.textContent = `${q.numb}. ${q.question}`;

    // Update badge level di pojok kanan atas counter
    questionCounter.innerHTML = `Level ${
      q.level
    } <span style="font-weight:normal; font-size:0.8em">| Soal ${index + 1}/${
      questions.length
    }</span>`;

    let optionTag = `
            <div class="option-btn" data-ans="a">${q.options.a}</div>
            <div class="option-btn" data-ans="b">${q.options.b}</div>
            <div class="option-btn" data-ans="c">${q.options.c}</div>
        `;
    optionContainer.innerHTML = optionTag;

    const options = optionContainer.querySelectorAll(".option-btn");
    for (let i = 0; i < options.length; i++) {
      options[i].setAttribute("onclick", "optionSelected(this)");
    }
  }

  // --- FUNGSI TAMPILKAN PANDUAN (INTERMEZZO) ---
  function showGuide(level) {
    // Ambil data panduan dari questions.js
    const data = levelGuides[level];

    // Isi konten
    guideTitle.innerText = data.title;
    guideContent.innerHTML = data.content;

    // Switch Tampilan
    quizBox.style.display = "none";
    quizHeader.style.display = "none"; // Sembunyikan header soal biar bersih
    guideBox.style.display = "block";
  }

  // --- FUNGSI SELESAI ---
  function finishQuiz() {
    // Simpan skor final (skala 0-100)
    // Karena total soal 12
    const finalScore = Math.round((correctAns / questions.length) * 100);
    sessionStorage.setItem("finalScore", finalScore);
    window.location.href = "result.html";
  }

  // Simpan global function untuk dipanggil dari HTML
  window.optionSelected = function (answer) {
    const currentQIndex = questionCount;
    const userAns = answer.getAttribute("data-ans");
    const correctAnsData = questions[currentQIndex].answer;
    const allOptions = document.querySelector(".option-container").children;

    // Icons
    const tickIcon = '<span style="float: right; font-weight: bold;">✔️</span>';
    const crossIcon =
      '<span style="float: right; font-weight: bold;">❌</span>';

    if (userAns === correctAnsData) {
      answer.classList.add("selected");
      answer.style.backgroundColor = "#d4edda";
      answer.style.borderColor = "#28a745";
      answer.insertAdjacentHTML("beforeend", tickIcon);
      correctAns++; // Tambah skor lokal

      // Update tempCorrect di session (untuk result.js)
      let currentSessionCorrect = parseInt(
        sessionStorage.getItem("tempCorrect") || 0
      );
      sessionStorage.setItem("tempCorrect", currentSessionCorrect + 1);
    } else {
      answer.classList.add("selected");
      answer.style.backgroundColor = "#f8d7da";
      answer.style.borderColor = "#dc3545";
      answer.insertAdjacentHTML("beforeend", crossIcon);

      for (let i = 0; i < allOptions.length; i++) {
        if (allOptions[i].getAttribute("data-ans") == correctAnsData) {
          allOptions[i].style.backgroundColor = "#d4edda";
          allOptions[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }
    }

    for (let i = 0; i < allOptions.length; i++) {
      allOptions[i].classList.add("disabled");
      allOptions[i].style.pointerEvents = "none";
    }
    nextBtn.style.display = "block";
  };
});

// Reset session score saat load
if (window.location.pathname.includes("quiz.html")) {
  sessionStorage.setItem("tempCorrect", 0);
}
