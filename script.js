function cekNilai() {
  var input = document.getElementById("nilai").value;
  var hasil = document.getElementById("hasilNilai");
  var nilai = Number(input);
  var grade, ket, warna;

  if (input === "") {
    hasil.innerHTML = "<span class='salah'>Nilai belum diisi!</span>";
    return;
  }

  if (nilai < 0 || nilai > 100) {
    hasil.innerHTML = "<span class='salah'>Nilai harus 0 sampai 100!</span>";
    return;
  }

  if (nilai >= 90) {
    grade = "A";
    ket = "Sangat Baik";
    warna = "hijau";
  } else if (nilai >= 80) {
    grade = "B";
    ket = "Baik";
    warna = "hijau";
  } else if (nilai >= 70) {
    grade = "C";
    ket = "Cukup";
    warna = "oranye";
  } else if (nilai >= 60) {
    grade = "D";
    ket = "Kurang";
    warna = "oranye";
  } else {
    grade = "E";
    ket = "Sangat Kurang";
    warna = "merah";
  }

  hasil.innerHTML = "Nilai " + nilai + " = grade <span class='" + warna + "'>" + grade + " (" + ket + ")</span>";
}

function tabelPerkalian() {
  var input = document.getElementById("angka").value;
  var hasil = document.getElementById("hasilKali");
  var angka = Number(input);

  if (input === "") {
    hasil.innerHTML = "<span class='salah'>Angka belum diisi!</span>";
    return;
  }

  var teks = "";
  for (var i = 1; i <= 10; i++) {
    teks += angka + " x " + i + " = " + (angka * i) + "<br>";
  }
  hasil.innerHTML = teks;
}

function jumlahAngka() {
  var input = document.getElementById("batas").value;
  var hasil = document.getElementById("hasilJumlah");
  var n = Number(input);

  if (input === "" || n < 1) {
    hasil.innerHTML = "<span class='salah'>Isi angka minimal 1!</span>";
    return;
  }

  var i = 1;
  var total = 0;
  var deret = "";

  while (i <= n) {
    total += i;
    deret += i;
    if (i < n) {
      deret += " + ";
    }
    i++;
  }

  hasil.innerHTML = deret + "<br>Total = <b>" + total + "</b>";
}
