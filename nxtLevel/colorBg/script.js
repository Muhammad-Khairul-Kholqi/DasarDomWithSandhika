// GANTI WARNA BACKGROUND JADI HITAM
const gantiBg = document.getElementById('gantiWarna');
const text = document.querySelector('h1')
gantiBg.onclick = function() {
    document.body.classList.toggle('ganti-warna')
    text.classList.toggle('ganti-color')
}

// GANTI WARNA BACKGROUND JADI RAANDOM
// Penjelasan
// buat elemen button
const tAcak = document.createElement('button');
// buat teks buat buttonnya
const teksAcak = document.createTextNode('acak warna')
// satukan button dengan teksnya
tAcak.appendChild(teksAcak)
// buat atritubut pada button
tAcak.setAttribute('type', 'button');
// taro button seteleh button yang gantiBg
gantiBg.after(tAcak);
tAcak.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});