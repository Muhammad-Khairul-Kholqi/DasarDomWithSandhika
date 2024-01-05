// // document.querySellector() 
// // element
// // selector yang di maksud adalah css

// // carikan tag p dari id b
// const p4 = document.querySelector('#b p');
// p4.style.color = "red";
// p4.style.fontSize = "50px";

// // carikan tag li yang ke 2 dari section yang idnya b
// const li = document.querySelector('section#b ul li:nth-child(2)');
// li.style.backgroundColor = 'yellow';

// // karna querySelector mengembalikan 1 element walaupun tag htmlnya ada banyak hanya akan di ambil yang pertama
// // const p = document.querySelector('p');
// // p.innerHTML = 'ini di ubah di js';





// // document.querySellectorAll() 
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'green';
// }



// memilih dengan mempersempit lingkupannya
// carikan id b dari section
const sectionB = document.querySelector('section#b');
// carikan tag p index ke 0 dari const section b
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'yellow';
