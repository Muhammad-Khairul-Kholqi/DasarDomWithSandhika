// DOM SELECTION


// document.getElementById() -> javascript tolong carikan element dari id yang ada di document
// buat dulu varible untuk element yang akan di sleksi
// gunakan const karna variblenya tidak akan di ubah lagi
// menangkap id judul 
const judul = document.getElementById('judul');
// ambil variablenya beri style dan kasih properti css (beri titik sebagai penghubung)
// ketika ini di buat maka otomatis akan membuat inline css
// css menggunakan camelCase
judul.style.color = 'yellow';
judul.style.textAlign = 'center';
judul.style.backgroundColor = 'blue';
// mengganti kata/kalimat 
judul.innerHTML = 'Khairul';




// document.getElementsByTagName() -> javascript tolong carikan element dari name yang ada di document
// htmlCollection -> menyimpan banyak data (tag HTML)
const p = document.getElementsByTagName('p');
// gunakan -> [''] karna tagnya ada banyak harus di tangkap indexnya dulu
// p[2].style.backgroundColor = 'yellow';

// jika ingin merubah semua tagnya gunakan looping
// gunakan length untuk menentukan semua jumlah indexnya (bisa juga menggunakan angka)
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'yellow';
}

// walaupun dalam html h1 hanya ada satu dia bisa menjadi htmlCollection tinggal tambahkan saja indexnya
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';




// document.getElementsByClassName()
// htmlCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini di ubah dari js';

