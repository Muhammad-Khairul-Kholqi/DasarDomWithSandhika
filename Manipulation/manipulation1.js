// element.innerHtml()
// memaninpulasi isi html

// const judul = document.getElementById('judul');
// judul.innerHTML = 'Khairul';

// const sectionA = document.getElementById('a');
// sectionA.innerHTML = '<div><em>Hello all</em></div>';



// elemnt.style
// manipulasi css

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'blue';
// judul.style.color = 'yellow';




// element.setAttribute() -> menambhakn atribut baru
// atribut adalah sesuatu yang menempel pda html
// contonya id=""

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute ('name', 'ini-judul');




// element.getAttribute()
// memanggil isian dari atribut
// menggunakan fungsi ini akan menimpa class isian sebelumnya
// const a = document.querySelector('section#a a');
// a.getAttribute('href')



// element.removeAttribute()
// menghapus sifat atribut
// const a = document.querySelector('section#a a');
// a.removeAttribute('href');




const p2 = document.querySelector('.p2');

// elemement.classList.add()
// menambah class tanpa menimpa class seblumnya
p2.classList.add('haiii');
p2.classList.add('hello');

// elemement.classList.remove()
// menghapus class jika ada
// p2.classList.remove('haiii');


// element.classList.toggle()
// mengecek apakah udah punya class ini belum jika belum tambahkan jika ada hapus
// p2.classList.toggle('haii')

// awalnya ada css dengan class ngetes tapi di html tidak ada maka ini cara menambhaknnya di html
document.body.classList.toggle('ngetes')

// element.classList.item()
// mencari nama class di hitung dari 0
// p2.classList.item(2);


// element.classList.contains()
// mencari isian dari class jika ada hasilnya true jika tida false
// p2.classList.contains('haii')


// element.classList.replace()
// mengganti isian class
p2.classList.replace('hello', 'dunia');
