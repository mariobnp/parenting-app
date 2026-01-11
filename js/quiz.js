document.addEventListener("DOMContentLoaded", () => {
  const questionText = document.querySelector(".question-text");
  const optionContainer = document.querySelector(".option-container");
  const nextBtn = document.querySelector(".next-btn");
  const questionCounter = document.querySelector(".question-counter");

  let questionCount = 0;
  let userScore = 0;
  let correctAns = 0;

  // Load soal pertama
  showQuestion(0);

  // Event saat tombol Next diklik
  nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
      questionCount++;
      showQuestion(questionCount);
      nextBtn.style.display = "none"; // Hide button until user selects answer
    } else {
      // Kalkulasi Akhir
      const finalScore = Math.round((correctAns / questions.length) * 100);
      sessionStorage.setItem("finalScore", finalScore);
      window.location.href = "result.html";
    }
  };

  function showQuestion(index) {
    const q = questions[index];
    questionText.textContent = `${q.numb}. ${q.question}`;
    questionCounter.textContent = `Soal ${q.numb} dari ${questions.length}`;

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
});

// Fungsi Global dipanggil saat opsi diklik
function optionSelected(answer) {
  // Ambil data dari questions.js
  // Note: Kita butuh akses index global, agar simple kita ambil text soal atau index dari DOM
  // Untuk safety code sederhana ini, kita asumsikan urutan linear
  const currentQIndex =
    parseInt(
      document.querySelector(".question-counter").textContent.split(" ")[1]
    ) - 1;
  const userAns = answer.getAttribute("data-ans");
  const correctAnsData = questions[currentQIndex].answer;
  const allOptions = document.querySelector(".option-container").children;

  if (userAns === correctAnsData) {
    // Jawaban Benar
    answer.classList.add("selected");
    answer.style.backgroundColor = "#d4edda"; // Light green
    answer.style.borderColor = "#28a745";

    // Update skor global di scope window agar bisa diakses (atau gunakan sessionStorage sementara)
    let currentCorrect = parseInt(sessionStorage.getItem("tempCorrect") || 0);
    sessionStorage.setItem("tempCorrect", currentCorrect + 1);
  } else {
    // Jawaban Salah
    answer.classList.add("selected");
    answer.style.backgroundColor = "#f8d7da"; // Light red
    answer.style.borderColor = "#dc3545";

    // Highlight jawaban yang benar otomatis (opsional, untuk edukasi)
    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].getAttribute("data-ans") == correctAnsData) {
        allOptions[i].style.backgroundColor = "#d4edda";
      }
    }
  }

  // Disable semua opsi setelah memilih
  for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].classList.add("disabled");
    allOptions[i].style.pointerEvents = "none";
  }

  // Munculkan tombol Next
  document.querySelector(".next-btn").style.display = "block";
}

// Reset tempCorrect saat mulai quiz
if (window.location.pathname.includes("quiz.html")) {
  sessionStorage.setItem("tempCorrect", 0);
}
