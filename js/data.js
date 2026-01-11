document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start');
    const btnNextData = document.getElementById('btn-next-data');

    // Logic Halaman 1 - Index
    if (btnStart) {
        btnStart.addEventListener('click', (e) => {
            e.preventDefault();
            const dadName = document.getElementById('dadName').value.trim();
            const momName = document.getElementById('momName').value.trim();

            if(!dadName || !momName) {
                Swal.fire({
                    icon: "warning",
                    title: "Data belum lengkap",
                    text: "Mohon isi nama Bunda dan Ayah terlebih dahulu",
                    confirmButtonText: "Mengerti",
                });
                return;
            }
            
            //simpan data ke localstorage
            sessionStorage.setItem('dadName', dadName);
            sessionStorage.setItem('momName', momName);

            //pindah halaman
            window.location.href = 'data.html'
        });
    }

    // Logic Halaman 2 - Isi data keluarga
    if(btnNextData) {
        btnNextData.addEventListener('click', (e) => {
            e.preventDefault();
            const momAge = document.getElementById('momAge').value;
            const pregnancyStatus = document.getElementById('pregnancyStatus').value;

            let planned = document.querySelector('input[name="planned"]:checked');

            if(!momAge || !pregnancyStatus || !planned) {
                Swal.fire({
                    icon: "warning",
                    title: "Data belum lengkap",
                    text: "Mohon lengkapi semua data.",
                    confirmButtonText: "Mengerti"
                });
                return;
            }

            // simpan data ke localstoraage
            sessionStorage.setItem('momAge', momAge);
            sessionStorage.setItem('pregnancyStatus', pregnancyStatus);
            sessionStorage.setItem('isPlanned', planned.value);

            // pindah halaman quiz
            window.location.href = 'quiz.html'
        })
    }
});