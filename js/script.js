// navigasi button jajargenjang
document.getElementById("jajargenjang-btn").addEventListener("click", function() {
  // Menampilkan section Jajargenjang dan menyembunyikan section Segitiga
  document.getElementById("segitiga-section").style.display = "none";
  document.getElementById("jajargenjang-section").style.display = "flex";
  
  // Mengubah warna tombol
  this.classList.add("active");
  document.getElementById("segitiga-btn").classList.remove("active");
});

// navigasi button segitiga
document.getElementById("segitiga-btn").addEventListener("click", function() {
  // Menampilkan section Segitiga dan menyembunyikan section Jajargenjang
  document.getElementById("segitiga-section").style.display = "flex";
  document.getElementById("jajargenjang-section").style.display = "none";
  
  // Mengubah warna tombol
  this.classList.add("active");
  document.getElementById("jajargenjang-btn").classList.remove("active");
});


// Hitung Luas Jajargenjang
document.getElementById("luas-jajargenjang-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // variabel let menyimpan semua jenis variabel
  // parseFloat mengubah value integer menjadi bilangan koma
  let alas = parseFloat(document.getElementById("alas-jajargenjang").value);
  let tinggi = parseFloat(document.getElementById("tinggi-jajargenjang").value);
  
  if (alas == " " || tinggi == " ") {
      document.getElementById("luas-jajargenjang-result").innerText = "inputan tidak boleh kosong";
      return;
  }

  let luas = alas * tinggi;
  document.getElementById("luas-jajargenjang-result").innerText = `Luas Jajargenjang: ${luas} ²`;
});

// Hitung Keliling Jajargenjang
document.getElementById("keliling-jajargenjang-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let sisi = parseFloat(document.getElementById("sisi-jajargenjang").value);
  let alas = parseFloat(document.getElementById("alas-jajargenjang").value);
  
  if (alas == " " || sisi == " ") {
      document.getElementById("keliling-jajargenjang-result").innerText = "inputan tidak boleh kosong";
      return;
  }

  let keliling = 2 * (alas + sisi);
  document.getElementById("keliling-jajargenjang-result").innerText = `Keliling Jajargenjang: ${keliling} `;
});

document.getElementById("luas-segitiga-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let alas = parseFloat(document.getElementById("panjang-alas").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value);
  
  if (alas == " " || tinggi == " ") {
      document.getElementById("luas-result").innerText = "inputan tidak boleh kosong";
      return;
  }

  let luas = 0.5 * alas * tinggi;
  document.getElementById("luas-result").innerText = `Luas Segitiga: ${luas} ²`;
});

// Hitung Keliling Segitiga
document.getElementById("keliling-segitiga-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let sisi = parseFloat(document.getElementById("sisi").value);
  
  if (sisi == "") {
      document.getElementById("keliling-result").innerText = "inputan tidak boleh kosong";
      return;
  }

  let keliling = sisi * 3;
  document.getElementById("keliling-result").innerText = `Keliling Jajargenjang: ${keliling} `;
});
