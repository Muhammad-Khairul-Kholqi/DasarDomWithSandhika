// var tanya = true;
// while (tanya) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if (comp < 0.34) {
//         comp = 'gajah';
//     } else if (comp >= 0.34 && comp < 0.67) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
//     var hasil = '';
//     if (p == comp) {
//         hasil = 'SERI!';
//     } else if (p == 'gajah') {
//         hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
//     } else if (p == 'orang') {
//         hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
//     } else if (p == 'semut') {
//         hasil = (comp == 'orang') ? 'KALAH' : 'MENANG!';
//     } else {
//         hasil = 'memasukkan pilihan yang salah!';
//     }

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');

const kertas = document.getElementsByClassName('kertas')[0];
const gunting = document.getElementsByClassName('gunting')[0];
const batu = document.getElementsByClassName('batu')[0];

const button = document.getElementsByTagName('button')[0];

const hasil = document.getElementsByClassName('hasil')[0];

kertas.addEventListener('click', function() {
    // const user = (kertas, gunting, batu)
    const comp = Math.random();

    if(comp < 0.34) {
        comp = kertas;
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = gunting;
    } else {
        comp = batu;
    }
});