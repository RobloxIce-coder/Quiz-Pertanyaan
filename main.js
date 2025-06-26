let skor = 3;
    let pertanyaan = [
      {
        soal: "Apa nama ibukota Indonesia?",
        jawaban: "jakarta"
      },
      {
        soal: "\"Bersatu kita teguh bercerai kita... \"",
        jawaban: "runtuh"
      },
      {
        soal: "Manusia bernafas memerlukan?",
        jawaban: "oksigen"
      },
      {
        soal: "Apa nama planet terbesar di tata surya kita? (Jupiter/Pluto)",
        jawaban: "jupiter"
      },
      {
        soal: "Terjadinya siang dan malam merupakan akibat peristiwa? (Rotasi/Revolusi)",
        jawaban: "rotasi"
      },
      {
        soal: "100×350/5×0 = ?",
        jawaban: "0"
      },
      {
        soal: "Apabila warna kuning digabung dengan warna biru akan menghasilkan warna apa?",
        jawaban: "hijau"
      },
      {
        soal: "Apa bahasa inggrisnya buah delima?",
        jawaban: "pomegranate"
      },
      {
        soal: "Apa yang membuat benda jatuh ke tanah?",
        jawaban: "gravitasi"
      },
      {
        soal: "Bagus!, sekarang anda manusia atau robot?",
        jawaban: "manusia"
      }
    ];
    let index = 0;
    
    document.getElementById("soal").innerHTML = pertanyaan[index].soal;
    
    function cekJawaban() {
      let jawaban = document.getElementById("jawaban").value;
      if (jawaban.toLowerCase() === pertanyaan[index].jawaban) {
        skor++;
        document.getElementById("hasil").innerHTML = "Jawaban benar!";
        document.getElementById("skor").innerHTML = "Skor: " + skor;
        index++;
        if (index < pertanyaan.length) {
          document.getElementById("soal").innerHTML = pertanyaan[index].soal;
          document.getElementById("jawaban").value = "";
        } else {
          document.getElementById("container").style.display = "none";
          document.getElementById("utama").style.display = "block";
          alert("Anda berhasil menjawab semua pertanyaan!, selamat :)");
          setTimeout(() => { 
  let musik = document.createElement("audio"); 
  musik.src = "GaramDanMadu.m4a"; 
  musik.play(); 
}, 1000);

let teksKedua = document.getElementById("teksKedua"); 
let startCount = 30; 
let endCount = 0; 
let perulangan = setInterval(() => { 
  startCount--; 
  teksKedua.innerHTML = `Menunggu... ${startCount}`; 
  if (startCount <= endCount) { 
    clearInterval(perulangan); 
    teksKedua.innerHTML = "Tunggu, anda akan redirect ke halaman lain :)"; 
  } 
}, 1000);

setTimeout(() => { 
  window.open("https://example.com", "_self"); 
}, 33000);
        }
      } else {
        skor--;
        document.getElementById("container").classList.add("salah");
        setTimeout(function() {
          document.getElementById("container").classList.remove("salah");
        }, 1000);
        document.getElementById("hasil").innerHTML = "Jawaban salah!";
        document.getElementById("skor").innerHTML = "Skor: " + skor;
        document.getElementById("jawaban").value = "";
        if (skor <= 0) {
          document.getElementById("hasil").innerHTML = "Game Over! Skor Anda 0. Anda akan keluar dari web dalam 5 detik.";
          document.getElementById("jawaban").disabled = true;
          document.getElementById("container").style.background = "#FF0000";
          setTimeout(function() {
            window.open("https://geda-gedi-gedao-v1.tiiny.site/", "_parent");
          }, 3000);
        }
      }
    }
 