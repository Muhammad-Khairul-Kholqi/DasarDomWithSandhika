// DOM MANIPULATION


// document.createElement() -> membuat element
// document.createTextNode() -> membuat teks untuk di isi kedalam elemen
// document.appendChild() -> singkatnya untuk menghubungkan antara elemen dan teks agar teks bisa masuk ke elemen dan akan tampil di akhir
// document.insertBefore() -> menangkap fungsi yang akan di tampulkan sebelum elemen

// PENJELASAN
// membuat elemen dan teks baru di dalam section id a di akhir

// buat elemen baru
const pBaru = document.createElement('p');
// buat di text buat di isi di elemen
const txtPBaru = document.createTextNode('text baru');
// masukan teks kedalam elemen
pBaru.appendChild(txtPBaru);
// karna mau di tampilkan di id a maka di panggil lah id ini
const sectionA = document.getElementById('a');
// lalu si variable dari id a menerima variable pBaru yang mau di tampilkan
sectionA.appendChild(pBaru)


// PENJELASAN
// menambahkan elemen dan teks baru seteleh item 1 dan sebelum item 2

// buat elemen baru
const liBaru = document.createElement('li');
// buat text yang akan di tampung oleh elemen
const textLi = document.createTextNode('text li baru');
// masukan teks kedalam elemen
liBaru.appendChild(textLi)
// panggil parrent dari tag li (yaitu ul)
const ulNih = document.querySelector('section#b ul');
// panggil li yang kedua
// karna mau memasukan kdealam ul sebelum li ke 2
const li = ulNih.querySelector('li:nth-child(2)');
// panggil parrentnya
// lalu masukan elemen baru dan elemen setelahnya
ulNih.insertBefore(liBaru, li)