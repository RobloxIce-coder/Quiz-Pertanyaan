let skor = 3;
    let pertanyaan =[{ soal: "Apa nama ibukota Indonesia?", jawaban: "jakarta", place: "Jakarta/Bandung/Semarang" },
  { soal: "\"Bersatu kita teguh bercerai kita... \"", jawaban: "runtuh", place: "Runtuh/Berpisah/Berkumpul" },
  { soal: "Manusia bernafas memerlukan?", jawaban: "oksigen", place: "Hidrogen/Oksigen/Nitrogen" },
  { soal: "Apa nama planet terbesar di tata surya kita?", jawaban: "jupiter", place: "Merkurius/Pluto/Venus/Jupiter/Mars" },
  { soal: "Terjadinya siang dan malam merupakan akibat peristiwa?", jawaban: "rotasi", place: "Rotasi/Revolusi/Radiasi" },
  { soal: "100×350/5×0 = ?", jawaban: "0", place: "Masukkan jawaban" },
  { soal: "Apabila warna kuning digabung dengan warna biru akan menghasilkan warna apa?", jawaban: "hijau", place: "Kuning/Merah/Hijau/Oranye" },
  { soal: "Ada berapakah jumlah planet di tata surya kita?", jawaban: "8", place: "7/8/9/10" },
  { soal: "Apa yang membuat benda jatuh ke tanah?", jawaban: "gravitasi", place: "Gravitasi/Angin yang kuat/Adanya magnet" },
  { soal: "Apa bahasa inggrisnya buah delima? ", jawaban: "pomegranate", place: "Jackfruit/Pomegranate/Popeye" },
  { soal: "Apakah semua hewan laut halal untuk dimakan? (Iya/Tidak)", jawaban: "iya", place: "Iya/Tidak" },
  { soal: "Lagu Indonesia Raya di ciptakan oleh?", jawaban: "wr supratman", place: "WR Supratman/Husien Mutahar/Abikoesno Djokrosoejoso" },
  { soal: "Apa yang harus kita lakukan apabila terdapat teman yang berbeda agama?", jawaban: "toleransi", place: "Toleransi/Menakuti/Menyakiti/Menghantui" },
  { soal: "Air hujan yang turun ke bumi berasal dari mana?", jawaban: "air laut", place: "Air laut/Air sungai/Air danau" },
  { soal: "Sila ke-tiga Pancasila berbunyi: ...", jawaban: "persatuan indonesia", place: "Persatuan Indonesia/Keadilan sosial" },
  { soal: "Asap pembakaran sembarangan dapat menyebabkan polusi.... ", jawaban: "udara", place: "Udara/laut/daratan?" },
  { soal: "Kapan terjadinya proklamasi kemerdekaan Indonesia?", jawaban: "17 agustus 1945", place: "<tanggal> <bulan> <tahun>" },
  { soal: "Bagus!, sekarang apakah kamu ingin terus belajar agar dimasa depan meraih kesuksesan? (Iya/Tidak)", jawaban: "iya", place: "Iya/Tidak" }];
    let index = 0;
    
    document.getElementById("soal").innerHTML = pertanyaan[index].soal;
    document.getElementById("skor").innerHTML = "Skor: "+skor;
    document.getElementById("jawaban").placeholder = pertanyaan[index].place;
    
    function cekJawaban() {
      let jawaban = document.getElementById("jawaban").value;
      if (jawaban.toLowerCase().trim() === pertanyaan[index].jawaban) {
        skor++;
        document.getElementById("hasil").innerHTML = "Jawaban benar!";
        setTimeout(() => {
  document.getElementById("hasil").innerHTML = "";
}, 1000);
        let benar = document.createElement("audio");
        benar.src = "Benar.mp3";
        benar.play();
        document.getElementById("container").classList.add("benar");
        setTimeout(
          () => {
          document.getElementById("container").classList.remove("benar")
          }, 1000
        )
        document.getElementById("skor").innerHTML = "Skor: " + skor;
        index++;
        if (index < pertanyaan.length) {
          document.getElementById("soal").innerHTML = pertanyaan[index].soal;
          document.getElementById("jawaban").value = "";
          document.getElementById("jawaban").placeholder = pertanyaan[index].place;
        } else {
          document.getElementById("container").style.display = "none";
          document.getElementById("utama").style.display = "block";
          alert("Selamat anda berhasil menjawab semua pertanyaan yang telah diberikan :)");
  let musik = document.getElementById("lagu");
  musik.play();

let teksKedua = document.getElementById("teksKedua"); 
let startCount = 17; 
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
  window.open("https://tempat-para-anomali.vercel.app/", "_self"); 
}, 7000);
        }
      } else {
        document.getElementById("jawaban").placeholder = pertanyaan[index].place;
        skor--;
        document.getElementById("container").classList.add("salah");
        setTimeout(function() {
          document.getElementById("container").classList.remove("salah");
        }, 1000);
        document.getElementById("hasil").innerHTML = "Jawaban salah!";
        setTimeout(() => {
  document.getElementById("hasil").innerHTML = "";
}, 1000);
        let salah = document.createElement("audio");
        salah.src = "Salah.mp3";
        salah.play();
        document.getElementById("skor").innerHTML = "Skor: " + skor;
        document.getElementById("jawaban").value = "";
        if (skor <= 0) {
          document.getElementById("hasil").innerHTML = `Game over!, skor anda : ${skor}, anda akan dikeluarkan dari sini!`;
          document.getElementById("jawaban").disabled = true;
          document.getElementById("kirim").disabled = true;
          document.getElementById("container").style.background = "#FF0000";
          setTimeout(function() {
            window.open("https://robloxice-coder.github.io/mydemowebsite1/","_self");
          }, 3000)
        }
      }
    }
 
