// GANTI WARNA BACKGROUND JADI HITAM
const gantiBg = document.getElementById('gantiWarna');
const text = document.querySelector('h1')
gantiBg.onclick = function() {
    document.body.classList.toggle('ganti-warna')
    text.classList.toggle('ganti-color')
}

// GANTI WARNA BACKGROUND JADI RAANDOM
const tAcak = document.createElement('button');
const teksAcak = document.createTextNode('acak warna')
tAcak.appendChild(teksAcak)
tAcak.setAttribute('type', 'button');
gantiBg.after(tAcak);
tAcak.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});