# Program Percabangan dan Perulangan

Program web sederhana yang menunjukkan penggunaan percabangan (`if / else if / else`) dan perulangan (`for` dan `while`) menggunakan HTML, CSS, dan JavaScript.

## Struktur File

```
.
├── index.html   # tampilan halaman
├── style.css    # pengaturan warna dan tata letak
├── script.js    # logika program
└── README.md    # dokumentasi
```

## Cara Menjalankan

1. Simpan semua file dalam satu folder yang sama.
2. Buka file `index.html` dengan browser (Chrome, Firefox, Edge, dan sebagainya).
3. Program siap digunakan, tidak perlu instalasi apa pun.

## Fitur

### 1. Cek Nilai (Percabangan)

Pengguna memasukkan nilai 0 sampai 100, lalu program menentukan grade dengan `if / else if / else`.

| Kondisi | Hasil |
|---------|-------|
| Input kosong | Pesan error |
| Nilai < 0 atau > 100 | Pesan error |
| Nilai >= 90 | Grade A (Sangat Baik) |
| Nilai >= 80 | Grade B (Baik) |
| Nilai >= 70 | Grade C (Cukup) |
| Nilai >= 60 | Grade D (Kurang) |
| Nilai < 60 | Grade E (Sangat Kurang) |

### 2. Tabel Perkalian (Perulangan `for`)

Pengguna memasukkan sebuah angka, lalu program menampilkan hasil perkaliannya dari 1 sampai 10 menggunakan perulangan `for`.

Contoh: input `7` menghasilkan `7 x 1 = 7` sampai `7 x 10 = 70`.

### 3. Jumlah 1 sampai N (Perulangan `while`)

Pengguna memasukkan angka N, lalu program menjumlahkan semua angka dari 1 sampai N menggunakan perulangan `while`.

Contoh: input `5` menghasilkan `1 + 2 + 3 + 4 + 5` dengan total `15`.

## Teknologi

- HTML untuk struktur halaman
- CSS untuk tampilan
- JavaScript untuk logika program
