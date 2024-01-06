// membuat item baru pada ul
// ketika paragraf 4 di klik maka li baru akan bertambah

// panggil dulu yang
const p4 = document.querySelector('section#b p');
// panggil variable yang mau jadi tempat untuk di click 
// tambahkan addEventListener
// lalu tambahkan 'click' jangan gunakan onclick
// buat function kosong
p4.addEventListener('click', function() {
    // panggil parrent dari li
    const ul = document.querySelector('section#b ul');
    // buat li baru
    const liBaru = document.createElement('li');
    // buat teks yang mau di tampung li
    const liText = document.createTextNode('item baru');
    // kasih style sebagai penanda
    liBaru.style.backgroundColor = 'red';
    // satukan li dengan teksnya
    liBaru.appendChild(liText);
    // tampilkan di parrentnyt
    ul.appendChild(liBaru);
});