// mengubah wanrna background menggunakan event handler
// menggunakan onclick

// panggil dulu yang mau di ubah
const p2 = document.querySelector('.p2')
// buat function yang menampung stylenya
function ubahBackgroundP2() {
    p2.style.backgroundColor = 'red';
} 
// panggil variable yang mau di ubah
// tambahkan onclick
// panggil function
p2.onclick = ubahBackgroundP2;