// Array berisi kalimat-kalimat yang ingin ditampilkan dengan efek ketik
var sentences = [
    "Hi sayang",
    "Hari ini adalah hari spesial karena kamu hadir di dunia ini. Pada hari ulang tahunmu ini, aku ingin mengucapkan terima kasih atas semua senyuman, canda, dan cinta yang telah kamu berikan. Terima kasih telah menjadi bagian terindah dalam hidupku. Aku harap kamu mendapatkan semua kebahagiaan di dunia ini dan terwujudnya cita - citamu, karena kamu pantas mendapatkannya. Terima kasih telah menjadi sumber kebahagiaan dan cinta dalam hidupku. Selamat ulang tahun, sayang! Semoga setiap hari kehidupanmu selalu penuh dengan kebahagiaan, rezeki, dan cinta yang tak terbatas, maafkan aku slalu membuat kamu sedih, terluka, menangis oleh kelakuanku, semoga aku bisa menjadi yang terbaik buat kamu.😘❤"
];

// Menambahkan kalimat ke dalam elemen dengan efek ketik
function typeWriter(text, i, elementId) {
    if (i < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, elementId)
        }, 100); // Waktu jeda antara penambahan huruf (dalam milidetik)
    }
}

// Memulai efek ketik untuk setiap kalimat
for (let i = 0; i < sentences.length; i++) {
    setTimeout(function () {
        typeWriter(sentences[i], 0, `line${i + 1}`);
    }, i * 1500); // Waktu jeda antara setiap kalimat (dalam milidetik)
}

// efek fade in
window.addEventListener('click', function() {
    var element = document.querySelector('.fade-in');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (position < windowHeight) {
      element.classList.add('show');
    }
  });
  
//   efek fade in selesai


// efek zoom
window.addEventListener('click', function() {
    var element = document.querySelector('.zoom-in');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    if (position < windowHeight) {
      element.classList.add('active');
    }
  });
  
// efek zoom selesai