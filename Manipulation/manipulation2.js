// DOM MANIPULATION
// sebelum membuat element pastikan mengetahui parrentnya dulu

// document.createElement() -> membuat element
// document.createTextNode() -> membuat teks untuk di isi kedalam elemen
// node.appendChild() -> singkatnya untuk menghubungkan antara elemen dan teks agar teks bisa masuk ke elemen dan akan tampil di akhir
// node.insertBefore() -> menangkap fungsi yang akan di tampulkan sebelum elemen
// parentNode.removeChild() -> menghapus child dari isian parrent
// parentNode.replaceChild() -> menggati elemen dan teks 

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



// PENJELASAN
// mengahpus elemen a pada id a 
// panggil dulu parrentnya, karna elemen a ada di id dan id a sudah di panggil di ata langsung saja
// panggil elemen yang mau di hapus
const link = document.getElementsByTagName('a')[0];
// panggil parrent masukan fungsi removenya dan pannggil variable di atas
sectionA.removeChild(link);



// PENJELASAN
// mengganti elemen p pada id b
// panggil dulu parrent dari p
const sectionB = document.getElementById('b');
// panggil tag p (yg mau di ganti)
const pLama = sectionB.querySelector('p');
// buat tag baru
const h2Baru = document.createElement('h2');
// buat teks yang akan di masukan kedalam h2
const newH2 = document.createTextNode('Judul section ke-2');
// hubungkan tag h2 dengan teks
h2Baru.appendChild(newH2)
// tangkap dulu parrentnya
// panggil fungsi js nya
// lalu panggil tag baru dan tag lama
// dibaca: tolong ganti pLama dengan h2Baru yang ada di sectionB
sectionB.replaceChild(h2Baru, pLama);



// style untuk menamdakan perubahan yang dilakukan
pBaru.style.backgroundColor = 'yellow';
liBaru.style.backgroundColor = 'yellow';
h2Baru.style.backgroundColor = 'yellow';